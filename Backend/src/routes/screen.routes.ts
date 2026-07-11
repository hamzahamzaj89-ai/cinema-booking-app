import {Router} from "express"
import { createScreen, createScreens, createSeatLayout } from "../controllers/screen.controller.js"


const router = Router()



router.post("/seatLayout/create" , createSeatLayout)
router.post("/create" , createScreen)
router.post("/all/create" , createScreens)

export default router