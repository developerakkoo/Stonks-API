
const io = require('socket.io-client');
const socket = io('http://192.168.0.113:8000'); // Replace with the actual IP address of your laptop



socket.on('connect', () => {
  console.log('Mobile connected to Socket.io');
  socket.on('get:Nifty50', (text) => {
    console.log('Received data:', text);
    console.log('done');
  });
});

socket.on('disconnect', () => {
  console.log('Mobile disconnected from Socket.io');
});
