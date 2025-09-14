import express from "express";
import { createPatientController } from "./patients.controller.js";

const router = express.Router();

// POST /api/patients - יצירת מטופל חדש
router.post("/", createPatientController);

export default router;