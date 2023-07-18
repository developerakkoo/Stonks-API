
// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://localhost:8000/App/api/v1/scrapData',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });



// let num = 5.56789
// let n = num.toFixed(2);
// console.log(n);



// // add entry price
// //next day  call delete add new data
// // profit loss 
// const moment = require ('moment');
// const labels =[1, 2, undefined,3, 4, 5]


// function getDate(num){
//     for(let D =num ; D<10; D++){

//     let date = moment().subtract(D,"day").format('DD-MM-YYYY'); 
//     console.log(date);
//     if (date == undefined) {
//         // SyntaxError: Illegal continue statement: no surrounding iteration statement
//         break;
//     }
// }}

// console.log(getDate(0));

// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
const cron = require('node-cron');
let T =true
cron.schedule('* * * * *',async () =>{
    try{
        T =false
    }catch(error){
        console.log(error);
    }
})
console.log(T);