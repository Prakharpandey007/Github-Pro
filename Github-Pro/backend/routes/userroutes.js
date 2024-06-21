import express from "express";
import { getUserProfileAndRepos } from "../controllers/usercontroller.js";
const router=express.Router();
router.get("/profile/:username",getUserProfileAndRepos);
export default router;

