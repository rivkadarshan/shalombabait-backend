import express from "express";
import { createAppointmentController } from "./appointments.controller.js";

const router = express.Router();

// POST /api/appointments - יצירת תור חדש
router.post("/", createAppointmentController);

export default router;