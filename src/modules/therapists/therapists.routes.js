import express from "express";
import { createTherapistController } from "./therapists.controller.js";

const router = express.Router();

// POST /api/therapists - יצירת מטפל חדש
router.post("/", createTherapistController);

export default router;