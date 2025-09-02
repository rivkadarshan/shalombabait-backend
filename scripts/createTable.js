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
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  teudat_zehut VARCHAR(10), 
  phone VARCHAR(20) NOT NULL,
  city VARCHAR(15) NOT NULL,
  address VARCHAR(30),
  email VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(15) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  agree TINYINT(1) DEFAULT 0
);
`;

// קריאה לפונקציה
createTable(usersTableSQL);
console.log('USER:', process.env.MYSQL_USER);
console.log('PASSWORD:', process.env.MYSQL_PASSWORD);
console.log('DB:', process.env.MYSQL_DATABASE);
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
