import { Router } from "express"
import { createCinema } from "../controllers/cinema.controller.js";



  const router = Router();


  router.post("/create", createCinema)


  export default router