require('dotenv').config();
const stripeKey = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(stripeKey);


async function makePayment(req,res){
    const { amount, currency } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        });
        res.status(200).json({ clientSecret: paymentIntent });
    } catch (err) {
        res.status(500).json({ Message: err.message,Status:"ERROR" });
    }
}


module.exports = {
    makePayment
}

//get latest  call route  
// user get subscri
// current nifty50 price
//user subscription route

//socket integraton