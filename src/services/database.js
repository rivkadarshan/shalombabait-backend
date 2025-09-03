import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({ path: "../.env" });

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT || 3306,
  });
  console.log('USER:', process.env.MYSQL_USER);
  console.log('PASSWORD:', process.env.MYSQL_PASSWORD);
  console.log('DB:', process.env.MYSQL_DATABASE);
  
  export default pool;