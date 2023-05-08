const express = require('express');
const routes = express.Router();
const stockController = require('../controller/stock.controller');
const VerifyCall = require ('../middlewares/verifyCalls')


routes.get('/App/api/v1/getData',stockController.getAllCalls);
routes.get('/App/api/v1/getData/:id',stockController.FindStockById);
routes.get('/App/api/v1/getDataByDate/:date',[VerifyCall.ValidateCalls],stockController.FindStockByDate);
routes.post('/App/api/v1/createData', stockController.createStock);
routes.put('/App/api/v1/updateData/:id', stockController.updateCall);
routes.delete('/App/api/v1/data/:id', stockController.deleteStock);

module.exports = {StockRoutes : routes}
