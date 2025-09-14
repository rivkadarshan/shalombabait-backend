import pool from "../../services/database.js";

export async function create(appointmentData) {
  const { 
    therapist_id, 
    patient_id, 
    type_id, 
    room_id, 
    appointment_date, 
    start_time, 
    end_time, 
    status 
  } = appointmentData;
  
  const query = `
    INSERT INTO Appointments 
    (therapist_id, patient_id, type_id, room_id, appointment_date, start_time, end_time, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  try {
    const [result] = await pool.execute(query, [
      therapist_id,
      patient_id,
      type_id,
      room_id,
      appointment_date,
      start_time,
      end_time,
      status || 'מתוזמנת'
    ]);
    
    return {
      appointment_id: result.insertId,
      therapist_id,
      patient_id,
      type_id,
      room_id,
      appointment_date,
      start_time,
      end_time,
      status: status || 'מתוזמנת',
      message: "Appointment created successfully"
    };
  } catch (error) {
    throw error;
  }
}

export async function checkTimeConflict(therapist_id, room_id, appointment_date, start_time, end_time) {
  const query = `
    SELECT appointment_id FROM Appointments 
    WHERE (therapist_id = ? OR room_id = ?) 
      AND appointment_date = ? 
      AND status != 'בוטלה'
      AND (
        (start_time <= ? AND end_time > ?) OR
        (start_time < ? AND end_time >= ?) OR
        (start_time >= ? AND end_time <= ?)
      )
  `;
  
  try {
    const [rows] = await pool.execute(query, [
      therapist_id, room_id, appointment_date,
      start_time, start_time,  // חפיפה מתחילת התור החדש
      end_time, end_time,      // חפיפה מסוף התור החדש
      start_time, end_time     // התור החדש מכיל תור קיים
    ]);
    return rows.length > 0;
  } catch (error) {
    throw error;
  }
}
