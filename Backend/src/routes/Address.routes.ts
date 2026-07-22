import { Router } from "express";
import { createAddress, getUserAddresses } from "../controllers/Address.controller.js";
import { protectAddress } from "../middleware/authentication.middleware.js";


const router = Router();


router.post("/create" , protectAddress, createAddress)

router.get("/get" , protectAddress , getUserAddresses)


export default router