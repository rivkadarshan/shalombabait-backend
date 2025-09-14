import { create } from "./patients.repo.js";
import pool from "../../services/database.js";

export async function createPatient(patientData) {
  try {
    // בדיקה שהמשתמש עדיין לא רשום כמטופל
    const [existingPatient] = await pool.execute(
      "SELECT * FROM Patients WHERE user_id = ?", 
      [patientData.user_id]
    );
    
    if (existingPatient.length > 0) {
      throw new Error("User is already registered as patient");
    }

    // וולידציה על תאריך לידה
    if (patientData.birth_date) {
      const birthDate = new Date(patientData.birth_date);
      const today = new Date();
      if (birthDate > today) {
        throw new Error("Birth date cannot be in the future");
      }
    }

    const newPatient = await create(patientData);
    return newPatient;
  } catch (error) {
    throw error;
  }
}