const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const adminController = require('./controllers/adminController');
const ongController = require('./controllers/ongController');
const sessionController = require('./controllers/SessionController');
const categController = require('./controllers/categController');
const ongDB = require('../models/ongDB');
const imageUpload = require('./middleware/imageUpload');


//ONGS

routes.post('/registerOng', imageUpload('imageFile'), ongController.create);

routes.get('/ongs', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().optional(),
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    page: Joi.number().optional(),
    name: Joi.string().optional(),
    categs: Joi.string().optional(),
  }),
}),
  ongController.index
);

routes.get('/ongsCount', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    name: Joi.string().optional(),
    categs: Joi.string().optional(),
  }),
}),
  ongController.totalApproved
);

//SESSION

routes.post('/session/:password', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      password: Joi.string().required()
    })
  }),
  sessionController.login
);

//ADMIN

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
    imageSrc: Joi.string().optional(),
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

//CATEGORY

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

routes.delete('/categ/:name', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    name: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),
  sessionController.authenticateToken,
  categController.delete
);

//CATEGORY SEARCH

routes.get('/categ/:ongId', celebrate({ //Will find all categories of an Ong with its ID as a param.
  [Segments.PARAMS]: Joi.object().keys({
    ongId: Joi.string().required()
  })
}),
  categController.searchCategs
);

routes.get('/ongcateg', celebrate({ //Will find all categories of an Ong with its ID as a param.
  [Segments.BODY]: Joi.object().keys({
    names: Joi.array().required()
  })
}),
  categController.searchOngs
)


module.exports = routes;
