const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const adminController = require('./controllers/adminController');
const ongController = require('./controllers/ongController');
const sessionController = require('./controllers/SessionController');
const categController = require('./controllers/categController');
const ongDB = require('../models/ongDB');
const imageUpload = require('./middleware/imageUpload');

// Ainda faltam criar e adicionar os controllers de cada rota para elas funcionarem.
// Parametros ja estao sendo validados pelo celebrate.

routes.post('/registerOng', imageUpload('imageFile'), celebrate({
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
    bankAccount: Joi.string().optional(),
    description: Joi.string().optional(),
  }),
}), ongController.create);

routes.get('/ongs', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    page: Joi.number().optional(),
  }),
}), ongController.index);


routes.post('/teste', imageUpload('teste'), (_req, res) =>
  res.status(204).send()
);


routes.get('/ongs', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().optional(),
    state: Joi.string().optional(),
    city: Joi.string().optional()
  })
}),
  ongController.index
);

routes.get('/ongsCount', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    state: Joi.string().optional(),
    city: Joi.string().optional(),
  })
}),
  ongController.totalApproved
);

routes.post(
  '/session/:password',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      password: Joi.string().required()
    })
  }),
  sessionController.login
);

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
    bankAccount: Joi.string().optional(),
    description: Joi.string().optional(),
    imageFile: Joi.optional()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), sessionController.authenticateToken, adminController.update);


routes.delete('/admin/:ongId', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    ongId: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),
  sessionController.authenticateToken,
  ongController.delete
);

routes.get('/categ', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    cat: Joi.array().optional()
  })
}),
  categController.index
);

routes.post('/categ', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    ongs: Joi.array().optional()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),
  sessionController.authenticateToken,
  categController.create
);

routes.put('/categ', celebrate({
  [Segments.BODY]: Joi.object().keys({
    ong: Joi.object().required(),
    categ: Joi.array().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),
  sessionController.authenticateToken,
  categController.categorize
);

routes.delete('/categ', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),
  sessionController.authenticateToken,
  categController.delete
);

module.exports = routes;
