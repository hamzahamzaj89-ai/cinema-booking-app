import { Controller } from "../types/controller.js";
import branchModel from "../models/branch.model.js";
import cinemaModel from "../models/cinema.model.js";
import AppError from "../utils/AppError.js";


export const createBranch: Controller = async (req, res, next) => {
    try {
        const {
            cinema,
            name,
            location,
            city,
            address,
            logo,
            screens,
            phone,
            email,
            isActive
        } = req.body;

        // Check if cinema exists
        const existingCinema = await cinemaModel.findById(cinema);

        if (!existingCinema) {
            throw new AppError("Cinema not found.", 404);
        }

        // Prevent duplicate branch names within the same cinema
        const existingBranch = await branchModel.findOne({
            cinema,
            name
        });

        if (existingBranch) {
            throw new AppError(
                "Branch already exists for this cinema.",
                409
            );
        }

        const branch = await branchModel.create({
            cinema,
            name,
            location,
            city,
            address,
            logo,
            screens,
            phone,
            email,
            isActive
        });

        res.status(201).json({
            success: true,
            message: "Branch created successfully.",
            branch
        });

    } catch (error) {
        next(error);
    }
};




