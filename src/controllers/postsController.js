const userService = require('../services/userService');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = await userService.getByEmail(req.email);
  const data = { title, content, userId: id };
  const post = await postService.create(data, categoryIds);
  return res.status(201).json(post);
};

module.exports = {
  create,
};