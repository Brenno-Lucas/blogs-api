const { User } = require('../models');

const create = async (param) => {
  const result = await User.create(param);
  return result;
};

const getAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return result;
};

const getByEmail = async (email) => {
  const [result] = await User.findAll({ where: { email } });
  return result;
};

const getById = async (id) => {
  const [result] = await User.findAll({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return result;
};

module.exports = {
  getByEmail,
  getAll,
  create,
  getById,
};