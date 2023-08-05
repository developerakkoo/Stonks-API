const express = require('express');
const routes = express.Router();
const stockController = require('../controller/stock.controller');
const VerifyCall = require ('../middleware/middleware')


routes.get('/App/api/v1/getData',stockController.getAllCalls);
routes.get('/App/api/v1/getData/:id',stockController.FindStockById);
routes.get('/App/api/v1/getDataByDate/:date',stockController.FindStockByDate);
routes.post('/App/api/v1/createData',stockController.createStock);
routes.put('/App/api/v1/updateData/:id', stockController.updateCall);
routes.delete('/App/api/v1/data/:id', stockController.deleteStock);

routes.get('/export-To-Excel/CallData',stockController.exportExcelCalls)

routes.get('/add',stockController.get)

routes.get('/getChart/data',stockController.chartData);

module.exports = {StockRoutes : routes}
