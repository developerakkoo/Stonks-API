const express = require('express');
const routes = express.Router();
const DataController = require('../controller/getStocks.controller')


routes.get('/App/api/live/GetStocks',DataController.getStock);

routes.get('/App/api/live/index',DataController.getNifty50);

module.exports = {GetStocksRoute : routes}
