const { Category } = require('../models');

const create = async (name) => {
  const result = await Category.create({ name });
  return result;
};

const getAllCategories = async () => {
  const result = await Category.findAll();
  return result;
};

const getByIds = async () => {
  const data = await Category.findAll({ attributes: ['id'] });
  const values = data.map((e) => e.dataValues.id);
  return values;
};

module.exports = {
  create,
  getAllCategories,
  getByIds,
};