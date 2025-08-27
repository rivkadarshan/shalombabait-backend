const service = require('./user.service');

const create = async (req, res) => {
  const user = await service.create(req.body);
  res.status(201).json(user);
};

const getById = async (req, res) => {
  const user = await service.getById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

module.exports = { create, getById };
