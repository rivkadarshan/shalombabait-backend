
import { create, findByEmail, findByTeudatZehut, findByPhone } from "./user.repo.js";

export async function createUser(userData) {
  try {
    // בדיקה שהאימייל לא קיים כבר
    const existingUserByEmail = await findByEmail(userData.email);
    if (existingUserByEmail) {
      throw new Error("Email already exists");
    }

    // בדיקה שתעודת הזהות לא קיימת כבר (אם הוזנה)
    if (userData.teudat_zehut) {
      const existingUserByTZ = await findByTeudatZehut(userData.teudat_zehut);
      if (existingUserByTZ) {
        throw new Error("Teudat Zehut already exists");
      }

      // וולידציה על תעודת זהות (9 ספרות)
      if (!/^\d{9}$/.test(userData.teudat_zehut)) {
        throw new Error("Teudat Zehut must be exactly 9 digits");
      }
    }

    // בדיקה שמספר הטלפון לא קיים כבר
    const existingUserByPhone = await findByPhone(userData.phone);
    if (existingUserByPhone) {
      throw new Error("Phone number already exists");
    }

    // וולידציה על מספר טלפון (10 ספרות)
    if (!/^\d{10}$/.test(userData.phone)) {
      throw new Error("Phone number must be exactly 10 digits");
    }

    // וולידציה על אימייל
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      throw new Error("Invalid email format");
    }

    // וולידציה על אורך שם פרטי
    if (userData.first_name.length > 15) {
      throw new Error("First name cannot exceed 15 characters");
    }

    // וולידציה על אורך שם משפחה
    if (userData.last_name.length > 20) {
      throw new Error("Last name cannot exceed 20 characters");
    }

    // וולידציה על אורך עיר
    if (userData.city.length > 15) {
      throw new Error("City name cannot exceed 15 characters");
    }

    // וולידציה על אורך כתובת
    if (userData.address && userData.address.length > 30) {
      throw new Error("Address cannot exceed 30 characters");
    }

    // וולידציה על אורך אימייל
    if (userData.email.length > 30) {
      throw new Error("Email cannot exceed 30 characters");
    }

    // וולידציה על אורך סיסמה
    if (userData.password.length > 15) {
      throw new Error("Password cannot exceed 15 characters");
    }

    const newUser = await create(userData);
    
    // החזרת הנתונים ללא הסיסמה
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;

  } catch (error) {
    throw error;
  }
}
// import { createUser } from './user.repo.js';
// import bcrypt from 'bcrypt';

// export async function addUser(userData) {
//   const { name, email, password } = userData;

//   if (!name || !email || !password) {
//     throw new Error('All fields are required');
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const id = await createUser(name, email, hashedPassword);

//   return { id, name, email };
// }

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
