require('dotenv').config();
const express = require('express');
const routes = express.Router();
const controller = require('../controller/payment');




// routes.post('/make/payment',controller.createOrder)


routes.post('/make/payment',controller.order)

routes.get('/pay',(req,res) =>{
    res.render('Payment')
})



module.exports = {PaymentRoute : routes}
