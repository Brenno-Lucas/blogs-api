const express = require('express');
const categoriesController = require('./controllers/categoriesController');
const validateCategory = require('./middlewares/validateCategory');
const usersController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');
const validToken = require('./middlewares/validateToken');

// ...

const app = express();

app.use(express.json());
app.post('/login', usersController.login);
app.post('/user', userMiddleware.validFields, usersController.createUser);
app.get('/user', validToken, usersController.getAll);
app.get('/user/:id', validToken, userMiddleware.validID, usersController.getById);
app.post('/categories', validToken, validateCategory.validateCategory, 
categoriesController.createCategory);
app.get('/categories', validToken, categoriesController.getAllCategories);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

module.exports = app;
