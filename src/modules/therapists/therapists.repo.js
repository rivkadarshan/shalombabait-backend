import pool from "../../services/database.js";

export async function create(therapistData) {
  const { user_id } = therapistData;
  
  const query = `
    INSERT INTO Therapists (user_id)
    VALUES (?)
  `;
  
  try {
    const [result] = await pool.execute(query, [user_id]);
    return {
      therapist_id: result.insertId,
      user_id,
      message: "Therapist created successfully"
    };
  } catch (error) {
    throw error;
  }
}