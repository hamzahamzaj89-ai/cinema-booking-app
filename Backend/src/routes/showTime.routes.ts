import { Router } from "express";
import { createShowTime, filterShowTime, getShowTimeMovies, getShowtimePrices, getShowTimes, showTimeSeats } from "../controllers/ShowTime.controller.js";



const router = Router();



router.post("/create" , createShowTime)
router.get("/get/branch/:branchId" , getShowTimeMovies)
router.get("/get/branch/:branchId/movie/:movieId" , getShowTimes)
router.get("/filter" , filterShowTime)
router.get("/seats/showTime/:showTimeId"  , showTimeSeats)
router.get("/prices/showTime/:showTime" , getShowtimePrices)


export default router