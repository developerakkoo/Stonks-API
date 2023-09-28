require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const admin = require('firebase-admin');
const express= require('express');
const session = require('express-session');
const  MongoStore = require('connect-mongo')(session)
require('./passport-setup')(passport);
const bodyParser = require('body-parser');
const path =  require('path');
const serviceAccount  = require('./stonks-b66d4-be8791d7d5c7.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://stonks-b66d4-default-rtdb.firebaseio.com/"
})
require('./controller/cron1');
require('./controller/cron');
const {UserRoutes,authRoute,ScrapDataRoutes,GetStocksRoute,StockRoutes,ImageRoutes,SubscriptionRoutes,PaymentRoute,NoCallRoute}= require ('./routes/index.routes');
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
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  store :new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session())

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())

app.use(authRoute)
app.use(UserRoutes);
app.use(StockRoutes)
app.use(GetStocksRoute)
app.use(SubscriptionRoutes)
app.use(ScrapDataRoutes)
app.use(PaymentRoute)
app.use(ImageRoutes);
app.use(NoCallRoute);
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");

const MONGODB_URI = process.env.DB_URL

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


mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB"))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
})



app.get('/Export-to-excel-weeklyOrder', (req, res,next)=>{
  res.status(200).json({
    file:"http://localhost:8000/public/stokeData.csv",
  })
})
// app.get('/Dashboard', (req,res) =>{
//     res.render("Dashboard")
// })
app.get('/failed', (req,res) =>{
  res.render("failed")
})


//Auth google give us user profile
app.get('/google', passport.authenticate('google', {scope:['profile', 'email']}));
// Google auth callback
app.get('/google/callback',passport.authenticate('google',
    {
    successRedirect: '/Dashboard',
    failureRedirect:'/failed'
}))

app.all("*", (req, res, next) => {
  res.status(404).json({
      message:"Page not found"
  });
});
mongoose.connect(MONGODB_URI, {
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
  
// app.use((error,req,res,next)=>{
//   console.log(">>>",error)
//   error.statusCode = error.statusCode || 500;
//   error.status = error.statusCode || 'error';
//   res.status(error.statusCode).json({
//     status :error.statusCode,
//     message:error.message
//   })
// })
