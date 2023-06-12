const mongoose = require('mongoose');
const moment = require('moment');


const stockSchema = mongoose.Schema({
call:{
    type:String,
},
put:{
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
},createdAt: {
    type: Date,
    default: moment().format('LL'),
},
updatedAt: {
    type: Date,
    default: moment().format('LL')
}
});

module.exports = mongoose.model("stock",stockSchema);
