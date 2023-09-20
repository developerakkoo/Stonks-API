const mongoose = require('mongoose');
const moment = require('moment');


const nifty50DataSchema = mongoose.Schema({
    LTP:{
        type:Number,
        required: true
    },
    Date:{
        type:String,
        default: moment().format('DD-MM-YYYY')
    },
    Time:{
        type:String,
        default: moment().format('HH:MM A')
    }
},{timestamps: true});


module.exports = mongoose.model("nifty50Data",nifty50DataSchema);