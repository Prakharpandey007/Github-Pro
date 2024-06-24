import express from "express";
import { getUserProfileAndRepos,likeProfile,getLikes } from "../controllers/usercontroller.js";
import { ensureAuthenticated } from "../middleware/ensureauthenticated.js";

const router=express.Router();
router.get("/profile/:username",getUserProfileAndRepos);
router.get("/likes",ensureAuthenticated,getLikes)
//post method for like a profile 
router.post("/like/:username",ensureAuthenticated,likeProfile)
export default router;

