import { Router } from "express";
import { createAddress } from "../controllers/Address.controller.js";


const router = Router();


router.post("/create" , createAddress)