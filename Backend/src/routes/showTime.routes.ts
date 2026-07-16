import { Router } from "express";
import { createShowTime, filterShowTime, getShowTimeMovies, getShowTimes, showTimeSeats } from "../controllers/ShowTime.controller.js";



const router = Router();



router.post("/create" , createShowTime)
router.get("/get/branch/:branchId" , getShowTimeMovies)
router.get("/get/branch/:branchId/movie/:movieId" , getShowTimes)
router.get("/filter" , filterShowTime)
router.get("/seats"  , showTimeSeats)



export default router