const userService = require('../services/userService');

const validDisplayName = (displayName) => (displayName.length >= 8);
const validEmail = (email) => {
const re = /[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+\.){1,}([a-z]{2,16})/;
return re.test(email);
};
const validPassword = (password) => (password.length >= 6);

const INVALID_DISPLAY_NAME = '"displayName" length must be at least 8 characters long';
const INVALID_EMAIL = '"email" must be a valid email';
const INVALID_PASSWORD = '"password" length must be at least 6 characters long';
const INVALID_USER = 'User does not exist';

const validFields = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (!validDisplayName(displayName)) {
    return res.status(400).json({ message: INVALID_DISPLAY_NAME });
  }
  if (!validEmail(email)) {
    return res.status(400).json({ message: INVALID_EMAIL });
  }
  if (!validPassword(password)) {
    return res.status(400).json({ message: INVALID_PASSWORD });
  }
  next();
};

const validID = async (req, res, next) => {
  const { id } = req.params;
  const result = await userService.getById(id);
  if (!result) { return res.status(404).json({ message: INVALID_USER }); }
  req.response = result;
  next(); 
};

module.exports = {
  validFields,
  validID,
};