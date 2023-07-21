const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;
const subscriptionSchema = new Schema({
name:{
    type:String,
    required: true
},
price:{
    type:Number,
    required: true
},
duration:{
    type:Number,
    required: true
},
description:{
    type:String,
    
    required: true
},
createdAt: {
    type: Date,
    
    default: moment().format('LL')
},
updatedAt: {
    type: Date,
    default: moment().format('LL')
}
});

module.exports = mongoose.model("subscription",subscriptionSchema);