const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const adminController = require('./controllers/adminController');
const ongController = require('./controllers/ongController');
const ongDB = require('../models/ongDB');

//Ainda faltam criar e adicionar os controllers de cada rota para elas funcionarem.
//Parametros ja estao sendo validados pelo celebrate.

routes.get('/ongs', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        state: Joi.string().optional(),
        city: Joi.string().optional(),
        page: Joi.number().optional(),
    })
}), () => { });

routes.get('/admin/:password', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        password: Joi.string().required(),
    })
}), () => { });
routes.put('/admin/:ongId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        ongId: Joi.string().required(),
    })
}), () => { });

routes.post('/registerOng', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        cnpj: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        neighborhood: Joi.string().required(),
        street: Joi.string().required(),
        number: Joi.string().required(),
        complement: Joi.string().required(),
        picpay: Joi.string().optional(),
        facebook: Joi.string().optional(),
        whatsapp: Joi.string().optional(),
        email: Joi.string().required(),
        site: Joi.string().optional(),
        agencia: Joi.string().required(),
        banco: Joi.string().required(),
    })
}), () => { });

module.exports = routes;