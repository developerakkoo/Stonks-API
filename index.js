require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport')
const express= require('express');
const session = require('express-session');
const  MongoStore = require('connect-mongo')(session)
require('./passport-setup')(passport)
const bodyParser = require('body-parser')
const path =  require('path')
const {UserRoutes,authRoute,ScrapDataRoutes,GetStocksRoute,StockRoutes,SubscriptionRoutes,PaymentRoute}= require ('./routes/index.routes');

const app = express();

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  store :new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(UserRoutes)
app.use(authRoute)
app.use(StockRoutes)
app.use(GetStocksRoute)
app.use(SubscriptionRoutes)
app.use(ScrapDataRoutes)
app.use(PaymentRoute)
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");
const MONGODB_URI = process.env.DB_URL



mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB"))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
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