import movieModel from "../models/movie.model.js";
import { Controller } from "../types/controller.js";
import AppError from "../utils/AppError.js";

import { Request, Response } from "express";
import { Types } from "mongoose";
import favouritesModel from "../models/favourites.model.js";

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



}


export const toggleFavorite = async (
  req: any,
  res: Response,
  next:any
): Promise<void> => {
  try {
    const { movieId } = req.params
    if (!req.user.id) {
       throw new AppError("Unauthorized user" , 401)
      return;
    }

    if (!movieId) {
      throw new AppError("Invalid movie Id" , 400)
      return;
    }

    const favorite = await favouritesModel.findOne({
      userId: req.user.id,
      movieId,
    });


    if (favorite) {
      await favorite.deleteOne();

      res.status(200).json({
        success: true,
        message: "Movie removed from favorites",
        data: null
      });

      return;
    }

    await favouritesModel.create({
      userId: req.user.id,
      movieId,
    });

    res.status(201).json({
      success: true,
      message: "Movie added to favorites",
      data : null
    });
  } catch (error) {
      next(error)
  }
};



export const getUserFavorites = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const userId = req.user.id; 

    const favorites = await favouritesModel.find({ userId }).select("movieId").lean();

    return res.status(200).json({
      success: true,
      message: "Favorites fetched successfully.",
      data: favorites,
    });



  } catch (error) {
    next(error);
  }
};


export const getUserFavoritesMovies = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const userId = req.user.id; 
    const {page} = req.query;
    const limit = 4;
    const skip = limit * Number(page)
    let hasNextPage = false

  const favorites = await favouritesModel.find({ userId })
  .populate("movieId").skip(skip).limit(limit + 1)
  .lean();


    if (favorites.length > limit) {
          
      hasNextPage= true

    }
    if (hasNextPage) {
  favorites.pop()
    }


    return res.status(200).json({
      success: true,
      message: "Favorites fetched successfully.",
      hasNextPage,
      data: favorites,
    });



  } catch (error) {
    next(error);
  }




};
