require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const { JWT_SECRET } = process.env || 'teste';

const validate = (body) => {
  const { email, password } = body;
  return (email && password);
};

const login = async (req, res) => {
  const { body } = req;
  if (!validate(body)) {
    return res
    .status(400)
    .json({ message: 'Some required fields are missing' });
  }
  try {
    const { email, password } = body;
    const result = await userService.getAll(email);
    if (!result || result.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = jwt.sign({ data: { user: result.id } }, JWT_SECRET, {
      expiresIn: 600 });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
};