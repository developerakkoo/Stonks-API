// // const moment = require ('moment');
// // const momentTime= moment()
// // let crTime = moment().format('hh.mm')
// // let timeDelay = moment().subtract(10,"m").format('hh.mm')
// // console.log(`crTime: ${crTime}`);
// // console.log(`timeDelay: ${timeDelay}`);

// // const time = moment().add(1,'day').format('DD-MM-YYYY')
// // console.log("day",time)
// // console.log(moment().format('DD-MM-YYYY'))
// // const time1 = moment().subtract(20,"day").format('DD-MM-YYYY')
// // const t =moment().add(5, 'days').format('DD-MM-YYYY')  
// // console.log("Time1",time1)
// // let m3 = moment(moment(crTime,"hh:mm").diff(moment(m2,"hh:mm"))).format("hh:mm"); 
// // console.log(m3);
// // let n=11.04
// // console.log(n.toFixed(2))

// // console.log(`current time ${crTime}`);
// // momentTime.subtract(10,"minute")
// // console.log(`manipulated time ${momentTime.toString()}`)

// // console.log(moment().format('LT'));

// // var jsonexport = require('jsonexport');
// // const fs = require('fs')
// // var contacts = [   {
// //     userName: 'Scribble Studio',
// //     email: 'akkijadhav079@gmail.com',
// //     isActive: false,
// //     isBlocked: false,
// //     SubscriptionName: 'Basic',
// //     price: 100,
// // //     duration: '1',

// const io = require('socket.io-client');
// console.log('here')
// const socket = io('http://192.168.0.227:8000'); // Replace with the actual IP address of your laptop



// socket.on('connect', () => {
//   console.log('Mobile connected to Socket.io');
//   socket.on('get:Stocks', (text) => {
//     console.log('Received data:', text);
//     console.log('done');
//   });
// });

// socket.on('disconnect', () => {
//   console.log('Mobile disconnected from Socket.io');
// });



// //news api key cb84eeb4d7aa4f78816169f298d2d318


// const Stock = require('./model/stocks.model');
// const axios = require('axios');
const moment = require('moment');





console.log(moment().add(4.30,'h').format('LT'))

// if( moment().format('LT')!== '3:30 PM'){
//     console.log('here')
// }