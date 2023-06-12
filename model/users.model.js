const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;
const userSchema = new Schema({
googleId:{
    type:String,
    require:true
},
email:{
    type:String,
    required: true,
    unique: true,
    isEmail: true,
}, 
name:{
    type:String,
    required: true,
    length:10
    
},
photo:{
    type:String,
    required: true
},
SubscriptionId:{
    type:mongoose.Types.ObjectId,
    ref:"subscription"
},
isActive: {
    type: Boolean,
    required: true,
    default:false
},
isBlocked: {
    type: Boolean,
    required: true,
    default: false
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