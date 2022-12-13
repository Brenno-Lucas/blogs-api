const userService = require('../services/userService');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = await userService.getByEmail(req.email);
  const data = { title, content, userId: id };
  const post = await postService.create(data, categoryIds);
  return res.status(201).json(post);
};

const get = async (_req, res) => {
  try {
  const result = await postService.getAll();
  return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  get,
};