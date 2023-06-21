// const razorpay = require('razorpay');
// var instance = new razorpay({
//     key_id:process.env.key_id,
//     key_secret:process.env.key_secret,
// });

// exports.createOrder = async(req, res, next) => {
//     try {
//         const amount = req.body.amount;
        
//         var options = {
//             amount: amount,
//             currency:'INR'
//         }

//         instance.orders.create(options, function(err, order) {
//             console.log("ORDER: " + order);

//             if(err) {
//                 return res.status(400).json({ message: err.message, status: 'error' });
//             }
//             return res.status(201).json({status: 'success', message: 'Order Created.', order});
//         });
//     } catch (error) {
//         return res.status(400).json({message: error.message, status:'error'});
//     }
// }

// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const crypto = require('crypto')
// const app = express();
// app.use(bodyParser.json());

// const sdk = require('api')('@cashfreedocs-new/v3#173cym2vlivg07d0');

// exports.order = async (req,res)=>{
//     try {
//         var customerDetails = new CFCustomerDetails();
//         customerDetails.customerId = "some_random_id";
//         customerDetails.customerPhone = "9999999999";
//         customerDetails.customerEmail = "b.a@cashfree.com";
//         var d = {};
//         d["order_tag_01"] = "TESTING IT";

// var cFOrderRequest = new CFOrderRequest();
//         cFOrderRequest.orderAmount = 1;
//         cFOrderRequest.orderCurrency = "INR";
//         cFOrderRequest.customerDetails = customerDetails;
//         cFOrderRequest.orderTags = d;

//                 var apiInstance = new CFPaymentGateway();

//                 var result = await apiInstance.orderCreate(
//                     prodCfConfig,
//                     cFOrderRequest
//                 );
//                 if (result != null) {
//                     console.log(result?.cfOrder?.paymentSessionId);
//                     console.log(result?.cfOrder?.orderId);
//                     console.log(result?.cfHeaders);
//                 }
//             }catch (ApiException) {
//             console.log(ApiException);
//            }

//     } 



// const API_KEY = 'your_cashfree_api_key';
// const API_SECRET = 'your_cashfree_api_secret';
// const BASE_URL = 'https://api.cashfree.com/pg';

// // Endpoint to initiate a payment
// app.post('/payment/initiate', async (req, res) => {
//   try {
//     const { orderId, amount, name, email, phone } = req.body;
//     const data = {
//       appId: 'your_cashfree_app_id',
//       orderId,
//       orderAmount: amount.toString(),
//       orderCurrency: 'INR',
//       orderNote: 'Payment for order',
//       customerName: "name",
//       customerEmail: "email@gmail.com",
//       customerPhone: 9654789546,
//       returnUrl: 'http://your-return-url.com',
//       notifyUrl: 'http://your-notify-url.com',
//     };

//     const signature = generateSignature(data);
//     const response = await axios.post(`${BASE_URL}/order`, data, {
//       headers: {
//         'Content-Type': 'application/json',
//         'x-client-id': API_KEY,
//         'x-client-secret': API_SECRET,
//         'x-client-signature': signature,
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Payment initiation failed.' });
//   }
// });

// // Endpoint to handle payment callbacks
// app.post('/payment/callback', (req, res) => {
//   const { event, data } = req.body;
//   if (event === 'PAYMENT_RESPONSE') {
//     // Handle the payment response
//     console.log(data);
//     // You can perform actions based on the payment status or update your database
//     // ...
//   }
//   res.sendStatus(200);
// });

// // Helper function to generate the signature
// function generateSignature(data) {
//   const sortedKeys = Object.keys(data).sort();
//   const signatureData = sortedKeys.reduce((accumulator, key) => {
//     if (data[key] !== '') {
//       return accumulator + key + data[key];
//     }
//     return accumulator;
//   }, '');
//   return crypto
//     .createHmac('sha256', API_SECRET)
//     .update(signatureData)
//     .digest('base64');
// }

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
