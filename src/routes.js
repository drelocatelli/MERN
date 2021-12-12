const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers');

routes.get('/', Usuario.index);

// Rotas de usuarios
routes.get('/api/usuarios', Usuario.index);
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.put('/api/usuarios', Usuario.update);

module.exports = routes;