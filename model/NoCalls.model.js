const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const noCallSchema =new Schema({
    name:{
        type:Boolean,
        default:false,
        require:true,
    }
},{ timestamps: true});

module.exports = mongoose.model("NoCalls",noCallSchema);