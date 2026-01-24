import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
//protectRoute--> function which will first authenticate user, then only they can call sidebar users panel to see friends list, otherwise, fail

export default router;
