require('dotenv').config();
const mongoose = require('mongoose');
const admin = require('firebase-admin');
const express= require('express');
const bodyParser = require('body-parser');
const path =  require('path');
const serviceAccount  = require('./stonks-b66d4-be8791d7d5c7.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://stonks-b66d4-default-rtdb.firebaseio.com/"
})
require('./controller/cron1');
require('./controller/cron');
require('./controller/cron2');
const {UserRoutes,ScrapDataRoutes,GetStocksRoute,StockRoutes,ImageRoutes,SubscriptionRoutes,PaymentRoute,NoCallRoute}= require ('./routes/index.routes');
const cors = require('cors');
const app = express();
const {getNifty50}=require('./controller/getStocks.controller');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin',"http://localhost:8080", '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use( express.static('public'));
app.use('/public', express.static('public'))


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())

app.set("view engine", "ejs");
app.use(UserRoutes);
app.use(StockRoutes)
app.use(GetStocksRoute)
app.use(SubscriptionRoutes)
app.use(ScrapDataRoutes)
app.use(PaymentRoute)
app.use(ImageRoutes);
app.use(NoCallRoute);
app.use(express.urlencoded({extended:false}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });



const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};
app.post('/firebase/notification', (req, res)=>{
  const message = {
    notification: {
        title: 'Nifty Level Tracker',
        body: req.body.message,
        sound: 'default',
        image:'https://api.niftyleveltracker.in/public/1689314621436.jpeg'
        },
        data: { key1: 'value1', key2: 'value2' }
    }
  console.log(message);
  const  registrationToken = req.body.registrationToken
  const options =  notification_options
  
    admin.messaging().sendToDevice(registrationToken,message, options)
    .then( response => {
      res.status(200).json({msg: "Notification sent successfully",response})
    })
    .catch( error => {
      res.status(404).json({msg: error})
        console.log(error);
    });
})

app.get('/Export-to-excel-weeklyOrder', (req, res,next)=>{
  res.status(200).json({
    file:"http://localhost:8000/public/stokeData.csv",
  })
})

app.all("*", (req, res, next) => {
  res.status(404).json({
      message:"Page not found"
  });
});

mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    })
    .then((result) => {
      const server = app.listen(8000);
      console.log("app is running")
      const io = require("./socket").init(server);
  
      io.on("connection", (socket) => {
        console.log("Connected a User");
        socket.on("get:temp", (socket) => {
          console.log('nifty50 data socket');
          io.emit('data',{msg: "hi"});
        });
  
        socket.on("disconnect", () => {
          console.log("User Disconnected");
        });
      });

      
    })
    .catch((err) => {
      console.log(err);
    });
