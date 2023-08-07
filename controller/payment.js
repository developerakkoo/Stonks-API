require('dotenv').config();
const key = process.env.STRIPE_KEY
const stripe = require('stripe')('sk_test_51NRBG8SBGsqYtPbhSk9hzpx7xQPQ2Y96IRW69M7HD2b7ebnGX5hG3OoSZGOdozxznS1s6BXyts6WN7l6RvsuOJqf00mhRtUHFs');




// Create a new payment
exports.payment = async (req, res) => {
    try{
        let amount = req.body.amount;
        let params = {
            name:req.body.name,
            email: req.body.email
            }
            const customer = await stripe.customers.create();
            const ephemeralKey = await stripe.ephemeralKeys.create(
            {customer: customer.id},
            {apiVersion: '2022-11-15'}
            );
        
        
            const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'INR',
            customer: customer.id,
            automatic_payment_methods: {
            enabled: true,
            },
            });
        
        res.status(200).json({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
            customerEmail: customer.email,
            publishableKey: 'pk_test_51NRBG8SBGsqYtPbhHvE8XO8NY6vxgKLTv6wENQM3friu7i3hb2pMcEZjAOl0B5ETUthd5AXUTmuJYduVCsvIBLxp003kjz2LWn'
        });
        }catch(error){
        res.status(500).json(error)
    }
}






// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.










//https://stripe.com/docs/payments/quickstart?client=react