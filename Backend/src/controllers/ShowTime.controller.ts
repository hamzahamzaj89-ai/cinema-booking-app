import { Controller } from "../types/controller.js";
import showTimeModel from "../models/showTime.models.js";
import movieModel from "../models/movie.model.js";
import branchModel from "../models/branch.model.js";
import screenModel from "../models/Screen.model.js";
import AppError from "../utils/AppError.js";
import mongoose from "mongoose";
import bookingModel from "../models/booking.model.js";
import { IBookedSeat, IRow, ISeat } from "../interfaces/BookingSeat.js";

export const createShowTime: Controller = async (req, res, next) => {
    try {
        const {
            movie,
            branch,
            screen,
            date,
            startTime,
            endTime,
            price,
            language,
            format,
            status,
            isActive
        } = req.body;

        // Check movie
        const existingMovie = await movieModel.findById(movie);

        if (!existingMovie) {
            throw new AppError("Movie not found.", 404);
        }

        // Check branch
        const existingBranch = await branchModel.findById(branch);

        if (!existingBranch) {
            throw new AppError("Branch not found.", 404);
        }

        // Check screen
        const existingScreen = await screenModel
            .findById(screen)
            .populate("seatLayout");

        if (!existingScreen) {
            throw new AppError("Screen not found.", 404);
        }

      

        // Check overlapping showtimes
        const conflict = await showTimeModel.findOne({
            screen,
            date: new Date(date),
            startTime: {
                $lt: new Date(endTime)
            },
            endTime: {
                $gt: new Date(startTime)
            }
        });

        if (conflict) {
            throw new AppError(
                "Another showtime already exists during this time.",
                409
            );
        }

        // Get total seats from seat layout
        const availableSeats = (existingScreen.seatLayout as any).totalSeats;

        const showtime = await showTimeModel.create({
            movie,
            branch,
            screen,
            date: new Date(date),
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            price,
            language,
            format,
            availableSeats,
            bookedSeats: 0,
            status,
            isActive
        });

        res.status(201).json({
            success: true,
            message: "Showtime created successfully.",
            showtime
        });

    } catch (error) {
        next(error);
    }
};



export const getShowTimeMovies: Controller = async (
    req,
    res,
    next
) => {
    try {

        const page = Number(req.query.page) || 0;
        const  branchId:any = req.params.branchId
        const limit = 10;

        const skip = page * limit;

        const movies = await showTimeModel.aggregate([

            {
                $match: {
                    branch: new mongoose.Types.ObjectId((branchId)),
             
                }
            },

            {
                $sort: {
                    startTime: -1
                }
            },

            // One document per unique movie
            {
                $group: {
                    _id: "$movie"
                   
                }
            },

            // Sort movies by their latest showtime
            {
                $sort: {
                    latestShowTime: -1
                }
            },

            {
                $skip: skip
            },

            {
                $limit: limit
            },

            // Fetch movie document
            {
                $lookup: {
                    from: "movies",
                    localField: "_id",
                    foreignField: "_id",
                    as: "movie"
                }
            },

            {
                $unwind: "$movie"
            },

            // Return only movie data
            {
                $replaceRoot: {
                    newRoot: "$movie"
                }
            }

        ]);

        if (movies.length === 0) {
            throw new AppError("No movies found.", 404);
        }

        res.status(200).json({
            success: true,
            message: "Movies fetched successfully.",
            data: movies
        });

    } catch (error) {
        next(error);
    }
};







export const getShowTimes: Controller = async (
    req,
    res,
    next
) => {
    try {


        const movieId: any = req.params.movieId;
        const branch: any = req.params.branchId;

        const showTimes = await showTimeModel.aggregate([

            {
                $match: {
                    branch: new mongoose.Types.ObjectId(branch),
                    movie: new mongoose.Types.ObjectId(movieId),
                    isActive: true
                }
            },

            {
                $sort: {
                    date: 1,
                    startTime: 1
                }
            },

            {
                $lookup: {
                    from: "screens",
                    localField: "screen",
                    foreignField: "_id",
                    as: "screen"
                }
            },

            {
                $unwind: "$screen"
            },

            // Group by Date + Screen
            {
                $group: {
                    _id: {
                        date: "$date",
                        screen: "$screen._id"
                    },

                    screen: {
                        $first: {
                            _id: "$screen._id",
                            name: "$screen.name",
                            screenNumber: "$screen.screenNumber",
                            screenType: "$screen.screenType"
                        }
                    },

                    showTimes: {
                        $push: {
                            _id: "$_id",
                            startTime: "$startTime",
                            endTime: "$endTime",
                            format: "$format",
                            language: "$language"
                        }
                    }
                }
            },

            // Group by Date
            {
                $group: {
                    _id: "$_id.date",

                    screens: {
                        $push: {
                            screen: "$screen",
                            showTimes: "$showTimes"
                        }
                    }
                }
            },

            {
                $sort: {
                    _id: 1
                }
            },

            {
                $project: {
                    _id: 0,
                    date: "$_id",
                    screens: 1
                }
            }

        ]);

        res.status(200).json({
            success: true,
            message: "Showtimes fetched successfully.",
            data: showTimes
        });

    } catch (error) {
        next(error);
    }
};





export const filterShowTime: Controller = async (
    req,
    res,
    next
) => {
    try {

        if (!req.query.branch) {
            throw new AppError("Branch is required.", 400);
        }

        if (req.query.period && !req.query.date) {
            throw new AppError(
                "Date is required when filtering by period.",
                400
            );
        }

        const match: any = {
            branch: new mongoose.Types.ObjectId(
                req.query.branch as string
            ),
            isActive: true
        };





        if (req.query.date) {
            match.date = new Date(req.query.date as string);
        }







        
        if (req.query.period) {

            let startHour = 0;
            let endHour = 23;

            switch (req.query.period) {

                case "morning":
                    startHour = 6;
                    endHour = 11;
                    break;

                case "afternoon":
                    startHour = 12;
                    endHour = 16;
                    break;

                case "evening":
                    startHour = 17;
                    endHour = 20;
                    break;

                case "night":
                    startHour = 21;
                    endHour = 23;
                    break;
            }

            const startTime = new Date(req.query.date as string);
            startTime.setUTCHours(startHour, 0, 0, 0);

            const endTime = new Date(req.query.date as string);
            endTime.setUTCHours(endHour, 59, 59, 999);

            match.startTime = {
                $gte: startTime,
                $lte: endTime
            };
        }







        const pipeline: any[] = [
            {
                $match: match
            },

            {
                $group: {
                    _id: "$movie"
                }
            },

            {
                $lookup: {
                    from: "movies",
                    localField: "_id",
                    foreignField: "_id",
                    as: "movie"
                }
            },

            {
                $unwind: "$movie"
            }
        ];

        // Optional Genre
        if (req.query.genre) {
              
            pipeline.push({
                $match: {
                         "movie.genre": {
            $in: ((req.query.genre as string).split(","))
        }
                }
         
            });
        }

        pipeline.push(
            {
                $replaceRoot: {
                    newRoot: "$movie"
                }
            },

            {
                $sort: {
                    createdAt: -1
                }
            },

            {
                $limit: 10
            }
        );

        const movies = await showTimeModel.aggregate(pipeline);

        res.status(200).json({
            success: true,
            message: "ShowTime fetched successfully.",
            movies
        });

    } catch (error) {
        next(error);
    }
};








export const showTimeSeats: Controller = async (
    req,
    res,
    next
) => {
    try {

      

        if (!req.params.showTimeId) {
              throw new AppError("Please provide the show time detail" , 400);
              return
        }

         



        const showTime = await showTimeModel
            .findById(req.params.showTimeId)
            .populate({
                path: "screen",
                populate: {
                    path: "seatLayout"
                }
            });

        if (!showTime) {
            throw new AppError("Showtime not found.", 404);
        }


        
       

        const screen: any = showTime.screen;

        if (!screen || !screen.seatLayout) {
            throw new AppError("Seat layout not found.", 404);
        }


        

        const bookings = await bookingModel.find({
            showTime: showTime._id,
            $or: [
                {
                    status: "confirmed"
                },
                {
                    status: "pending",
                    expiresAt: {
                        $gt: new Date()
                    }
                }
            ]
        }).select("seats bookingStatus");

        // Hash Set for occupied seats
        const occupiedSeats = new Set<string>();

        for (const booking of bookings) {

            booking?.seats?.forEach((seatId: IBookedSeat) => {
                occupiedSeats.add(seatId.seatId);
            });

        }

        const seatLayout = {...screen.seatLayout};


        console.log(screen)


        seatLayout?.seatLayout?.forEach((row: IRow) => {
             
            row.seats.forEach((seat: ISeat |null) => {

                if (!seat) return;
                

                seat.bookingStatus = occupiedSeats.has(seat.seatId)
                    ? "booked"
                    : "available";
                    


            });

              


        });

        res.status(200).json({
            success: true,
            message: "Seat layout fetched successfully.",
            data: seatLayout.$__.parent.seatLayout.seatLayout,
            
        });

    } catch (error) {
        next(error);
    }
};





export const getShowtimePrices:Controller = async (req: any, res: any) => {
    try {
        const { showTime } = req.params;

        const prices = await showTimeModel
            .findById(showTime)
            .select("price -_id");

        if (!prices) {
             throw new AppError("Prices does not exit" , 404)
             return
        }

        return res.status(200).json({
            messages: "prices fetched successfully",

            success: true,
            data: prices.price,
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch prices",
            error,
        });
    }
};