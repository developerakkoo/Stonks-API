require('dotenv').config();
const stripe = require('stripe')('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');




// Create a new payment
exports.payment = async (req, res) => {
    try{
        let amount = req.body.amount;
        let params = {
            name:req.body.name,
            email: req.body.email
            }
            const customer = await stripe.customers.create(params);
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
        
        res.json({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
            customerEmail: customer.email,
            publishableKey: 'pk_live_51NRBG8SBGsqYtPbhK4qyxgcKOnavch0nVOWlWzEOhig3PFOl0J9SyCbIV80TMgwasInL4wWUgG3DRgwd0ywMyDa300fTyvbfDF'
        });
        }catch(error){
        res.status(500).json(error)
    }
}






// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.










//https://stripe.com/docs/payments/quickstart?client=react