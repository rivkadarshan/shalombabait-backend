import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }).promise()

  const r= await pool.query('SELECT * FROM clients', (err, results) => {
    if (err) throw err;
    console.log(results);
  });

  async function getClients() {
    const [rows] = await pool.query("SELECT * FROM clients")
    return rows
  }
  
  const notes = await getClients()
  console.log(notes)