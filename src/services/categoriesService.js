const { Category } = require('../models');

const create = async (name) => {
  const result = await Category.create({ name });
  return result;
};

const getAllCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  create,
  getAllCategories,
};