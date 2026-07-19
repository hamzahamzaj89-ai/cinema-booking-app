import {Router} from "express"
import { createBranch, getAllBranches } from "../controllers/branch.controller.js";


const router = Router();


router.post("/create" , createBranch)
router.get("/get" , getAllBranches)



export default router