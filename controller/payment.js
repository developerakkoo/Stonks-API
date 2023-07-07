

const stripe = require('stripe')('sk_test_51N3XzqSDlNvEqtUKCDVO8qCem4YQ5YIavkhniBGIZzw3GfUaheArddiqQMscdBrB7VhHLUeTZFeGmjFURzz5BejX00Ju8K4Oei');



// Create a new payment
exports.payment = async (req, res) => {
    const { amount, currency } = req.body;

    try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}


//https://stripe.com/docs/payments/quickstart?client=react