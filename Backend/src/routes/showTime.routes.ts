import { Router } from "express";
import { createShowTime, getShowTimeMovies, getShowTimes } from "../controllers/ShowTime.controller.js";



const router = Router();



router.post("/create" , createShowTime)
router.get("/get/branch/:branchId" , getShowTimeMovies)
router.get("/get/:movieid" , getShowTimes)

export default router