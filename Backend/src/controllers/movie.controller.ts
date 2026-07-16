import movieModel from "../models/movie.model.js";
import { Controller } from "../types/controller.js";
import AppError from "../utils/AppError.js";

import { Request, Response } from "express";
import FavoriteMovie from "../models/favourites.model.js";
import { Types } from "mongoose";

interface Props {
  req: any;
  res: any;
  next: any;
}

export const createMovie: Controller = async (req, res, next) => {
  try {
    const movie = req.body;


    const findMovie = await movieModel.findOne({tmdb : movie.tmdb})

    if (findMovie) {
          throw new AppError("movie already exist" , 409)
    }

    const createdMovie = await movieModel.create(movie);


    
    res.status(201).json({
      success: true,
      message: "Movies has been created successfully",
    });


  } catch (error) {
    next(error);
  }
};


export const getMovies: Controller = async (req, res, next) => {


  try {

     const skip = Number(req.query.page) * 10;

    const movies = await movieModel.find().sort({updatedAt: 1}).skip(skip);


    if (movies.length === 0) {

      throw new AppError("no movies are found" , 404);


    }


    res.status(200).json({message : "Movies fetched successfully" , success: true, movies:movies})



  } catch (error) {
    next(error);
  }



};



export const searchMovie:Controller = async (req , res , next) => {



   try {

    const { query } = req.query;
     const limit = 8;

    if (!query || typeof query !== "string") {
         throw new AppError("Please enter the search query " , 400)
      return;
    }

    const movies = await movieModel.find({
      title: {
        $regex: query,
        $options: "i",
      },
          status: {
        $in: ["now_showing", "coming_soon"]
    }

    
    }).limit(limit)
      
      .sort({ title: 1 });
    

    res.status(200).json({
      success: true,
      results: movies,
    });
    
   } catch (error) {
      next(error)
   }





}




export const toggleFavorite = async (
  req: any,
  res: Response
): Promise<void> => {
  try {
    const clerkId = req.auth?.userId;
    const { movieId } = req.body;

    if (!clerkId) {
       throw new AppError("Unauthorized user" , 401)
      return;
    }

    if (!movieId || !Types.ObjectId.isValid(movieId)) {
      throw new AppError("Invalid movie Id" , 400)
      return;
    }

    const favorite = await FavoriteMovie.findOne({
      clerkId,
      movieId,
    });

    if (favorite) {
      await favorite.deleteOne();

      res.status(200).json({
        success: true,
        favorite: false,
        message: "Movie removed from favorites",
      });

      return;
    }

    await FavoriteMovie.create({
      clerkId,
      movieId,
    });

    res.status(201).json({
      success: true,
      favorite: true,
      message: "Movie added to favorites",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};