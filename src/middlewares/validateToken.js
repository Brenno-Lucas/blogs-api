require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateToken = async (req, res, next) => {
  try {
  const header = req.header('Authorization');
  if (!header) return res.status(401).json({ message: 'Token not found' });

  jwt.verify(header, JWT_SECRET, (err, decode) => {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
    req.email = decode.email;
    return next();
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = validateToken;