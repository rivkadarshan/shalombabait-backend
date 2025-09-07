import pool from "../src/services/database.js";

// פונקציה כללית שמקבלת SQL של CREATE TABLE ומריצה אותו
async function createTable(sql) {
  try {
    await pool.query(sql);
    console.log("Table created successfully!");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

// דוגמה ליצירת טבלת Users
const usersTableSQL = `
  CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    teudat_zehut VARCHAR(10), 
    phone VARCHAR(20) NOT NULL,
    city VARCHAR(15) NOT NULL,
    address VARCHAR(30),
    email VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(15) NOT NULL,
    role ENUM('מזכיר','מנהל','מטפל','מטופל') NOT NULL DEFAULT 'מטופל',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    agree TINYINT(1) DEFAULT 0
  );
`;

const paymentsTableSQL = `
  CREATE TABLE IF NOT EXISTS payments (
    pay_id INT AUTO_INCREMENT PRIMARY KEY
  );
`;

const therapistsTableSQL = `
  CREATE TABLE IF NOT EXISTS therapists (
    therapist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    pay_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (pay_id) REFERENCES payments(pay_id)
  );
`;


const patientsTableSQL = `
  CREATE TABLE IF NOT EXISTS patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    therapist_id INT,
    pay_id INT,
    status VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (therapist_id) REFERENCES therapists(therapist_id),
    FOREIGN KEY (pay_id) REFERENCES payments(pay_id)
  );
`;

const addColumnInTherapistsTableSQL = `
  ALTER TABLE therapists 
    ADD COLUMN patient_id INT,
    ADD FOREIGN KEY (patient_id) REFERENCES patients(patient_id
);`;

// ליצירת הטבלאות בSQL יש להסיר את ההערות מהשורות אחת אחרי השניה לפי הסדר ולהריץ כל פעם עם שורה אחת!
// createTable(usersTableSQL);
// createTable(paymentsTableSQL);
// createTable(therapistsTableSQL);
// createTable(patientsTableSQL);
// createTable(addColumnInTherapistsTableSQL);