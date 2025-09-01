import pool from "../../services/database.js";
// export async function createUser(name, email, hashedPassword) {
//   const [result] = await pool
//     // .promise()
//     .query('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [
//       name,
//       email,
//       hashedPassword,
//     ]);
//   return result.insertId;
// }
export async function createUser(name, email, hashedPassword) {
  const [result] = await pool.query(
    'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
  return result.insertId;
}

// const findById = (id) => db('users').where({ id }).first();

// const findByEmail = (email) => db('users').where({ email }).first();

// module.exports = { createUser, findById, findByEmail };
