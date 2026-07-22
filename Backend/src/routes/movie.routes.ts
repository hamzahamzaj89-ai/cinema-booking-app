import {Router} from 'express'
import { createMovie , getMovies  , toggleFavorite} from '../controllers/movie.controller.js';
import { requireAuth } from "@clerk/express";


const router = Router();



router.post("/create" ,  createMovie)
router.get("/get" , getMovies)
router.get("favourite/movie/movieId" , requireAuth(), toggleFavorite)

export default router