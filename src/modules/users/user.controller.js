import { addUser } from './user.service.js';

export async function createUser(req, res) {
  try {
    const user = await addUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
