
const express = require('express');
const routes = express.Router();
const paymentController = require('../controller/payment');




// routes.post('/make/payment',controller.createOrder)


// routes.post('/make/payment',controller.order)



routes.post('/payment-sheet',paymentController.payment);



module.exports = {PaymentRoute : routes}
