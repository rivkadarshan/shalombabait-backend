import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// קובעים את הנתיב לקובץ .env (לפי המיקום שלו ביחס ל־test.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import pool from "../src/services/database.js";

const checkVersion = async () => {
  try {
    const [rows] = await pool.query("SELECT VERSION() AS version");
    console.log("MySQL version:", rows[0].version);
  } catch (err) {
    console.error("Error checking MySQL version:", err);
  } finally {
    await pool.end(); // סוגר את חיבור ה־pool בסיום
  }
};

checkVersion();

// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // לקבל את הנתיב של הקובץ הנוכחי
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // לטעון את הקובץ .env שממוקם באותו תיקייה כמו test.js
// dotenv.config({ path: path.resolve(__dirname, '../.env') });

// // לבדוק שהערכים נטענו
// console.log('USER:', process.env.MYSQLUSER);
// console.log('PASSWORD:', process.env.MYSQLPASSWORD);
// console.log('DATABASE:', process.env.MYSQLDATABASE);
// console.log('HOST:', process.env.MYSQLHOST);
// console.log('PORT:', process.env.MYSQLPORT);
