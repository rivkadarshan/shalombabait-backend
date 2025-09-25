import express from "express";
import { createRoomController, getRoomsController } from "./rooms.controller.js";

const router = express.Router();

router.get("/",getRoomsController)
router.post("/",createRoomController)

export default router;