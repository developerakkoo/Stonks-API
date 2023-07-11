require('dotenv').config();
const key = process.env.STRIPE_KEY
const stripe = require('stripe')(key);



// Create a new payment
exports.payment = async (req, res) => {
    try {
        const { amount } = req.body;
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "inr",
        automatic_payment_methods: {
            enabled: true,
        },
        });
        res.status(200).json({orderId:paymentIntent.client_secret})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message,status:"ERROR"});
    }

}


//https://stripe.com/docs/payments/quickstart?client=react