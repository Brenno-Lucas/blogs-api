const { User } = require('../models');

const getByEmail = async (email) => {
  const [result] = await User.findAll({ where: { email } });
  return result;
};

const getAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return result;
};

const create = async (param) => {
  const result = await User.create(param);
  return result;
};

module.exports = {
  getByEmail,
  getAll,
  create,
};