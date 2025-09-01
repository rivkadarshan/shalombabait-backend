import pool from "../src/services/database";
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
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

// קריאה לפונקציה
createTable(usersTableSQL);

// // דוגמה נוספת: טבלת Products
// const productsTableSQL = `
// CREATE TABLE IF NOT EXISTS Products (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   price DECIMAL(10,2) NOT NULL,
//   stock INT DEFAULT 0,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// )
// `;

// createTable(productsTableSQL);
