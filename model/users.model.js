const mongoose = require('mongoose');
const moment = require('moment');
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true,
        isEmail: true,
},
mobile:{
    type:Number,
    required: true,
    length:10
    
},
isActive: {
    type: String,
    required: true,
    default:"false"
},
isBlocked: {
    type: Date,
    required: true,
    default: "false"
},
createdAt: {
    type: Date,
    
    default: moment().format('LL'),
},
updatedAt: {
    type: String,
    default: moment().format('LL')
}
}); 
module.exports = mongoose.model("User",userSchema);