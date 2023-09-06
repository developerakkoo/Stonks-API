const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema
const stockSchema = new Schema({
call:{
    type:String,
},
entryPrice:{
    type:Number,
},
targetPrice:{
    type:Number,
    required: true,
},
stopLoss:{
    type:Number,
    required: true,
},
isCall:{
    type: Boolean,
    default:false
},
isProfit:{
    type: Boolean,
    default:false
},
isLoss:{
    type: Boolean,
    default:false
},
trackNifty50:{
    type: [],
    default:[]
},
Date: {
    type: String,
    default: moment().format('DD-MM-YYYY'),
}
},{ timestamps: true});

module.exports = mongoose.model("stock",stockSchema);
