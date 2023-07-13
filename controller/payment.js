require('dotenv').config();
const key = process.env.STRIPE_KEY
const stripe = require('stripe')(key);



// Create a new payment
exports.payment = async (req, res) => {
    try {
        // const { amount ,token} = req.body;
        // // Create a PaymentIntent with the order amount and currency
        // const paymentIntent = await stripe.paymentIntents.create({
        // amount: amount,
        // currency: "inr",
        // source: token,
        // automatic_payment_methods: {
        //     enabled: true,
        // },
        // });
        // res.status(200).json({orderId:paymentIntent.client_secret})
        stripe.charges.create({
            amount: req.body.amount,
            currency: req.body.currency,
            source: req.body.token,
            description:req.body.description,
            }).then((charge) => {
                console.log(charge);
                res.status(200).json(charge);
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message,status:"ERROR"});
    }

}


//https://stripe.com/docs/payments/quickstart?client=react