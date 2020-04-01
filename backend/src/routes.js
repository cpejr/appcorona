const express = require('express');

const routes = express.Router();

routes.get('/index', (request, response) => {
    return response.send(200);
});

module.exports = routes;