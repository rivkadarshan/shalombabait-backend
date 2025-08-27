const repo = require('./user.repo');

const create = async (payload) => {
  const existing = await repo.findByEmail(payload.email);
  if (existing) {
    const err = new Error('Email already exists');
    err.status = 409;
    throw err;
  }
  const id = await repo.create(payload);
  return repo.findById(id);
};

const getById = (id) => repo.findById(id);

module.exports = { create, getById };
