const express = require('express');
const routes = express.Router();
const Controller = require('../controller/noCall.controller');



routes.post('/api/add/noCall',Controller.addNoCall);

routes.put('/api/update/noCall/:id',Controller.UpdateNoCall);


routes.get('/api/get/noCall/:id',Controller.getNoCall);

module.exports = {NoCallRoute : routes}
