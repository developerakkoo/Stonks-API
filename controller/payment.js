require('dotenv').config();
const key = process.env.STRIPE_KEY
const stripe = require('stripe')(key);



// Create a new payment
exports.payment = async (req, res) => {
    try {
        const { product, routes } = req.body;
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "INR",
                    product_data: {
                        name: product.name,
                        images: [product.image],
                    },
                    unit_amount: product.amount * 100,
                },
                quantity: product.quantity,
            }],
            mode: "payment",
            success_url: routes.success_url,
            cancel_url: routes.cancel_url,
        });
        res.json({ id: session.id });
    } catch (error) {
        console.log(error);
    }

}


//https://stripe.com/docs/payments/quickstart?client=react