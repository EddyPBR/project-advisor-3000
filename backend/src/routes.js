const express = require('express');

const authController = require('./controllers/authController');
const projectController = require('./controllers/projectController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/auth/register', authController.register);
routes.post('/auth/authenticate', authController.authenticate);
routes.post('/auth/forgot_password', authController.recoverPassword);
routes.put('/auth/reset_password', authController.resetPassword);

routes.get('/projects', authMiddleware, projectController.index);
routes.get('/projects/:projectId', authMiddleware, projectController.search);
routes.post('/projects', authMiddleware, projectController.create);
routes.put('/projects/:projectId', authMiddleware, projectController.update);
routes.delete('/projects/:projectId', authMiddleware, projectController.delete);

module.exports = routes;
