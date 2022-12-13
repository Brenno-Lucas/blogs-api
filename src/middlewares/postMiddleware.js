const categoryService = require('../services/categoriesService');

const validateFields = (body) => (!body.title || !body.content || !body.categoryIds);

const validateIds = async (ids) => {
  if (!ids.length) return { type: false, message: 'one or more "categoryIds" not found' };
  const result = await categoryService.getByIds();
  if (!ids.every((e) => result.includes(e))) {
    return { type: false, message: 'one or more "categoryIds" not found' };
  }
  return { type: true };
};

const validateCreate = async (req, res, next) => {
  if (validateFields(req.body)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const validate = await validateIds(req.body.categoryIds);
  if (!validate.type) return res.status(400).json({ message: validate.message });
  next();
};

module.exports = { validateCreate };