import { Controller } from "../types/controller.js";
import screenModel from "../models/Screen.model.js"
import branchModel from "../models/branch.model.js";
import AppError from "../utils/AppError.js";
import seatLayoutModel from "../models/SeatLayout.model.js";


export const createScreens: Controller = async (req , res , next) => {
    
    try {



        const createScreens = await screenModel.insertMany(req.body)
        
        res.status(200).json({message: "inserted successfully" , success: true, screens: createScreens})


        
    } catch (error) {
          next(error)
    }



}

export const createScreen: Controller = async (req, res, next) => {
    try {
        const {
            branch,
            name,
            screenNumber,
            totalSeats,
            seatLayout,
            screenType,
            isActive
        } = req.body;

        // Check if branch exists
        const existingBranch = await branchModel.findById(branch);

        if (!existingBranch) {
            throw new AppError("Branch not found.", 404);
        }

        // Prevent duplicate screen numbers within the same branch
        const existingScreen = await screenModel.findOne({
            branch,
            screenNumber
        });

        if (existingScreen) {
            throw new AppError(
                "Screen number already exists for this branch.",
                409
            );
        }

        // Create screen
        const screen = await screenModel.create({
            branch,
            name,
            screenNumber,
            seatLayout,
            screenType,
            isActive
        });

        // Add screen to branch
        await branchModel.findByIdAndUpdate(
            branch,
            {
                $push: {
                    screens: screen._id
                }
            }
        );

        res.status(201).json({
            success: true,
            message: "Screen created successfully.",
            screen
        });

    } catch (error) {
        next(error);
    }
};




export const createSeatLayout: Controller = async (req, res, next) => {
    try {
        const {
            name,
            seatLayout,
            isActive
        } = req.body;

        // Check if layout already exists
        const existingLayout = await seatLayoutModel.findOne({ name });

        if (existingLayout) {
            throw new AppError(
                "Seat layout already exists.",
                409
            );
        }

        // Validate total seats
        const totalSeats = seatLayout.reduce((count:number, row:any) => {
    return count + row.seats.filter((seat:any) => seat !== null).length;
}, 0);

       
        const layout = await seatLayoutModel.create({
            name,
            seatLayout,
            totalSeats,
            isActive
        });

        res.status(201).json({
            success: true,
            message: "Seat layout created successfully.",
            layout
        });

    } catch (error) {
        next(error);
    }
};




