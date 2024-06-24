import express from "express";
import { getUserProfileAndRepos,likeProfile,getLikes } from "../controllers/usercontroller.js";
import { ensureauthenticated } from '../middleware/ensureauthenticated.js';

const router=express.Router();
router.get("/profile/:username",getUserProfileAndRepos);
router.get("/likes",ensureauthenticated,getLikes)
//post method for like a profile 
router.post("/like/:username",ensureauthenticated,likeProfile)
export default router;

