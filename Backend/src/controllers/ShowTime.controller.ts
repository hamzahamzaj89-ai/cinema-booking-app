import { Controller } from "../types/controller.js";
import showTimeModel from "../models/showTime.models.js";
import movieModel from "../models/movie.model.js";
import branchModel from "../models/branch.model.js";
import screenModel from "../models/Screen.model.js";
import AppError from "../utils/AppError.js";
import mongoose from "mongoose";

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
                    branch: new mongoose.Types.ObjectId((branchId))
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
                    _id: "$movie",
                    latestShowTime: {
                        $first: "$startTime"
                    }
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
            movies
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


        const movieId: any = req.params.movieid;

        const showTimes = await showTimeModel.aggregate([

            {
                $match: {
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
            showTimes
        });

    } catch (error) {
        next(error);
    }
};