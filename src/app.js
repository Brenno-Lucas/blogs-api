const express = require('express');
const usersController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');
const validToken = require('./middlewares/validateToken');

// ...

const app = express();

app.use(express.json());
app.post('/login', usersController.login);
app.post('/user', userMiddleware.validFields, usersController.createUser);
app.get('/user', validToken, usersController.getAll);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

module.exports = app;
