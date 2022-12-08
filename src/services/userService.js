const { User } = require('../models');

const getAll = async (email) => {
  const [data] = await User.findAll({ where: { email } });
  return data;
};

const create = async (param) => {
  const data = await User.create(param);
  return data;
};

module.exports = {
  getAll,
  create,
};