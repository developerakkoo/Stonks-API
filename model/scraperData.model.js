const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const dataSchema = mongoose.Schema({
    SYMBOL:{
        type:String,
        required: true
    },
    OPEN:{
        type:String,
        required: true
    },
    HIGH:{
        type:String,
        required: true
    },
    LOW:{
        type:String,
        required: true
    },
    PREVCLOSE:{
        type:String,
        required: true
    },
    LTP:{
        type:String,
        required: true
    },
    CHNG:{
        type:String,
        required: true
    },
    CHANGPercentage:{
        type:String,
        required: true
    },
    VOLUME:{
        type:String,
        required: true
    },
    fiftyTwo_WH:{
        type:String,
        required: true
    },
    fiftyTwo_WL:{
        type:String,
        required: true
    },
    Date:{
        type:String,
        required: true
    },
    Time:{
        type:String,
        required: true
    }
});

dataSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Data",dataSchema);