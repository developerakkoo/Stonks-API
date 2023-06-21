const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema
const stockSchema = new Schema({
call:{
    type:String,
},
put:{
    type:String,
},
entryPrice:{
    type:String,
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
Date: {
    type: String,
    default: moment().format('DD-MM-YYYY'),
}
},{ timestamps: true});

module.exports = mongoose.model("stock",stockSchema);
