const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;
const imageSchema = new Schema({
Image:{
    type:String,
    require:true
},
ImageUrl:{
    type:String,
    require:true
},
createdAt: {
    type: Date,
    
    default: moment().format('LL'),
},
updatedAt: {
    type: String,
    default: moment().format('LL')
}
},{timestamp:true}); 
module.exports = mongoose.model("Image",imageSchema);