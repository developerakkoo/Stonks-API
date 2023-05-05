const express = require('express');
const routes = express.Router();
const DataController = require('../controller/getStocks.controller')


routes.get('/App/api/v1/GetStocks',DataController.getStock);

module.exports = {GetStocksRoute : routes}