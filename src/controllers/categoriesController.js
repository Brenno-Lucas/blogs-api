const categoryService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await categoryService.create(name);
    return res.status(201).json({
      id: result.id,
      name,
    });
  } catch (error) {
    res.status(500).json({
      message: error.messsage,
    });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const result = await categoryService.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};