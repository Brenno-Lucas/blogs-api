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
module.exports = {
  createCategory,
};