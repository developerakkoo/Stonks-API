const express = require('express');
const routes = express.Router();
const DataController = require('../controller/getStocks.controller');
const{getNifty50} = require('../controller/getNifty');



// routes.get('/App/api/live/GetStocks',DataController.getStock);

// routes.get('/App/api/live/index',getNifty50);

module.exports = {GetStocksRoute : routes}
