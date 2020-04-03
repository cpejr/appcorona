const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const adminController = require('./controllers/adminController');
const ongController = require('./controllers/ongController');
const sessionController = require('./controllers/SessionController');
const ongDB = require('../models/ongDB');

// Ainda faltam criar e adicionar os controllers de cada rota para elas funcionarem.
// Parametros ja estao sendo validados pelo celebrate.
routes.post('/registerOng', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    cnpj: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    neighborhood: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.string().required(),
    cep: Joi.string().required(),
    email: Joi.string().required(),
    complement: Joi.string().optional(),
    picpay: Joi.string().optional(),
    facebook: Joi.string().optional(),
    ddd: Joi.string().optional(),
    phoneNumber: Joi.string().optional(),
    site: Joi.string().optional(),
    branch: Joi.string().optional(),
    bank: Joi.string().optional(),
  }),
}), ongController.create);

routes.get('/ongs', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    page: Joi.number().optional(),
  }),
}), ongController.index);


routes.post('/session/:password', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    password: Joi.string().required(),
  }),
}), sessionController.login);


routes.get('/admin', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), sessionController.authenticateToken, adminController.index);

routes.put('/admin/:ongId', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    ongId: Joi.string().required(),
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().optional(),
    cnpj: Joi.string().optional(),
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    neighborhood: Joi.string().optional(),
    street: Joi.string().optional(),
    number: Joi.string().optional(),
    complement: Joi.string().optional(),
    cep: Joi.string().optional(),
    picpay: Joi.string().optional(),
    facebook: Joi.string().optional(),
    ddd: Joi.string().optional(),
    phoneNumber: Joi.string().optional(),
    email: Joi.string().optional(),
    site: Joi.string().optional(),
    branch: Joi.string().optional(),
    bank: Joi.string().optional(),
    approved: Joi.bool().optional(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), sessionController.authenticateToken, adminController.update);

routes.delete('/admin/:ongId', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    ongId: Joi.string().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), sessionController.authenticateToken, ongController.delete);

module.exports = routes;