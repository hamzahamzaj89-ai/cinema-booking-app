import {Router} from 'express'
import { createMovie , getMovies, searchMovie } from '../controllers/movie.controller.js';



const router = Router();



router.post("/create" ,  createMovie)
router.get("/get" , getMovies)
router.get("/search" , searchMovie)

export default router