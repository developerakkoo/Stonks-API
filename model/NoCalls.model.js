const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const noCallSchema =new Schema({
    isNoCall:{
        type:Boolean,
        require:true
    }
},{ timestamps: true});

module.exports = mongoose.model("NoCalls",noCallSchema);