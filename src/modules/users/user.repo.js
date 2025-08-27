const db = require('../../db/knex');

const create = async ({ email, fullName }) => {
  const [id] = await db('users').insert({ email, full_name: fullName });
  return id;
};

const findById = (id) => db('users').where({ id }).first();

const findByEmail = (email) => db('users').where({ email }).first();

module.exports = { create, findById, findByEmail };
