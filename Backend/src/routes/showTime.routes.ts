import { Router } from "express";
import { createShowTime, filterShowTime, getShowTimeMovies, getShowTimes } from "../controllers/ShowTime.controller.js";



const router = Router();



router.post("/create" , createShowTime)
router.get("/get/branch/:branchId" , getShowTimeMovies)
router.get("/get/:movieid" , getShowTimes)
router.get("/filter" , filterShowTime)
export default router