import {Router} from "express"
import { createBranch } from "../controllers/branch.controller.js";


const router = Router();


router.post("/create" , createBranch)



export default router