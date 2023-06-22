const noCall = require('../model/NoCalls.model');
const IO = require('../socket');


exports.addNoCall = async (res,res)=>{
    try {
        const create = await noCall.create()
    } catch (error) {
        res.status(500).json({message:error.message,statusCode:500});
    }
}