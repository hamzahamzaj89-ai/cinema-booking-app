import {Router} from 'express'
import { createMovie , getMovies  , getUserFavorites, getUserFavoritesMovies, toggleFavorite} from '../controllers/movie.controller.js';
import { requireAuth } from "@clerk/express";
import { protectAddress } from '../middleware/authentication.middleware.js';


const router = Router();



router.post("/create" ,  createMovie)
router.get("/get" , getMovies)

router.get("/favourite/movie/:movieId" , protectAddress, toggleFavorite)

router.get("/favourites" , protectAddress, getUserFavorites)

router.get("/favourites/movies" , protectAddress, getUserFavoritesMovies)


export default router