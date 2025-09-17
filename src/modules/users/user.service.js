import { createUser } from './user.repo.js';
import bcrypt from 'bcryptjs';

export async function addUser(userData) {
  const { name, email, password } = userData;

  if (!name || !email || !password) {
    throw new Error('All fields are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const id = await createUser(name, email, hashedPassword);

  return { id, name, email };
}

// const repo = require('./user.repo');

// const create = async (payload) => {
//   const existing = await repo.findByEmail(payload.email);
//   if (existing) {
//     const err = new Error('Email already exists');
//     err.status = 409;
//     throw err;
//   }
//   const id = await repo.create(payload);
//   return repo.findById(id);
// };

// const getById = (id) => repo.findById(id);

// module.exports = { create, getById };
