import express from 'express';
import {explorePopularRepos} from '../controllers/explorecontroller.js'
import { ensureauthenticated } from '../middleware/ensureauthenticated.js';
const router=express.Router();

router.get("/repos/:language",ensureauthenticated,explorePopularRepos)
export default router;
