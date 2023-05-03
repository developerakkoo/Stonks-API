require('dotenv').config();
const express = require('express');
const routes = express.Router();
const stripePublicKey =process.env.STRIPE_PUBLISHABLE_KEY


routes.get('/pay',(req,res) =>{
    res.render('Payment',{
        key:stripePublicKey
    })
})



module.exports = {PaymentRoute : routes}