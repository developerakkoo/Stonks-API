require('dotenv').config();
const express = require('express');
const routes = express.Router();



routes.get('/pay',(req,res) =>{
    res.render('Payment')
})



module.exports = {PaymentRoute : routes}