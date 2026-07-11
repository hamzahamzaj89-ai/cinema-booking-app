import {Router} from 'express'
import { createMovie , getMovies } from '../controllers/movie.controller.js';



const router = Router();



router.post("/create" ,  createMovie)
router.get("/get" , getMovies)

export default router