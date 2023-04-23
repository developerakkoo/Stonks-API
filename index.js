const mongoose = require('mongoose');
const express= require('express');
require('dotenv').config();
const {UserRoutes,ScrapDataRoutes,StockRoutes,SubscriptionRoutes}= require ('./routes/index.routes')
const app = express();
app.use(express.json())
app.use(UserRoutes)
app.use(StockRoutes)
app.use(SubscriptionRoutes)
app.use(ScrapDataRoutes)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB"))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
})


app.listen(8000,()=> 
console.log('Running at localhost:8000'));






