require('dotenv').config();
const bodyParser = require('body-parser')
const path =  require('path')
const mongoose = require('mongoose');
const passport = require('passport')
const express= require('express');
const app = express();
const session = require('express-session');
const {UserRoutes,ScrapDataRoutes,GetStocksRoute,StockRoutes,SubscriptionRoutes,PaymentRoute}= require ('./routes/index.routes')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
require('./passport-setup')
app.use(express.json())
app.use(UserRoutes)
app.use(StockRoutes)
app.use(GetStocksRoute)
app.use(SubscriptionRoutes)
app.use(ScrapDataRoutes)
app.use(PaymentRoute)
app.use(express.urlencoded({extended:false}));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
}));
app.use(passport.initialize());
app.use(passport.session())
app.set("view engine", "ejs");
const MONGODB_URI = process.env.DB_URL

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB"))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
})


app.get('/', (req,res) =>{
    res.render("index")
})


app.get('/success', (req,res) =>{
    res.render("profile",{name:req.user.displayName, email:req.user.emails[0].value})
})

app.get('/google', passport.authenticate('google', {scope:['profile', 'email']}));

app.get('/google/callback', passport.authenticate('google', {failureRedirect:'/failed'}),
function(req, res) {
    res.redirect('/success')
})








// app.listen(8000,()=> 
// console.log('Running at localhost:8000'))
// const io = require("./socket").init(server)






mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    })
    .then((result) => {
      const server = app.listen(8080);
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
  
