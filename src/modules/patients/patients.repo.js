import pool from "../../services/database.js";

export async function create(patientData) {
  const { user_id, therapist_id, birth_date, gender, status, history_notes } = patientData;
  
  const query = `
    INSERT INTO Patients (user_id, therapist_id, birth_date, gender, status, history_notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  
  try {
    const [result] = await pool.execute(query, [
      user_id, 
      therapist_id, 
      birth_date, 
      gender, 
      status || 'פעיל', 
      history_notes || null
    ]);
    
    return {
      patient_id: result.insertId,
      user_id,
      therapist_id,
      birth_date,
      gender,
      status: status || 'פעיל',
      history_notes,
      message: "Patient created successfully"
    };
  } catch (error) {
    throw error;
  }
}
