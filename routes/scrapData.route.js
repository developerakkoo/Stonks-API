const express = require('express');
const routes = express.Router();

const DataController = require('../controller/csv.controller')

routes.post('/App/api/v1/scrapData',DataController.scrapData);
routes.get('/App/api/v1/getScrapData/',DataController.getScrapData);
routes.get('/App/api/v1/getScrapData20/',DataController.getScrapData20);

module.exports = {ScrapDataRoutes : routes}