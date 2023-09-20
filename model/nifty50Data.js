const mongoose = require('mongoose');
const moment = require('moment');
const {formatAMPM} = require('../constant/time')


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
        default: formatAMPM(new Date)
    }
},{timestamps: true});


module.exports = mongoose.model("nifty50Data",nifty50DataSchema);