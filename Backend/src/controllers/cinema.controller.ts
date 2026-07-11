import {Controller} from "../types/controller.js";
import cinemaModel from "../models/cinema.model.js";
import AppError from "../utils/AppError.js";

export const createCinema:Controller = async (req, res, next) => {
    try {
        

        // Check if cinema already exists
        const existingCinema = await cinemaModel.findOne({ name : req.body.name });

        if (existingCinema) {
            throw new AppError("Cinema already exists.", 409);
        }

        const cinema = await cinemaModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Cinema created successfully.",
            cinema
        });
    } catch (error) {
        next(error);
    }
};