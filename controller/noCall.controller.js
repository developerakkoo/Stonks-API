const noCall = require('../model/NoCalls.model');
const IO = require('../socket');


exports.addNoCall = async (req,res)=>{
    try {
        const data ={
            isNoCall:req.body.isNoCall
        } 
        const create = await noCall.create(data)
        IO.getIO().emit('post:noCall',create);
        res.status(200).json({message:'noCall Created Successfully',statusCode:200,data:create});
    } catch (error) {
        res.status(500).json({message:error.message,statusCode:500});
    }
}


exports.UpdateNoCall = async (req,res)=>{
    try {
        const savedNoCall = await noCall.findOne({_id:req.params.id});
        if (!savedNoCall) {
            return res.status(404).json({message:`No Call Value Not Found With this Id ${req.params.id}}`,statusCode:404});
        }

        savedNoCall.isNoCall = req.body.isNoCall != undefined
        ? req.body.isNoCall 
        : savedNoCall.isNoCall
        
        const updatedValue = await savedNoCall.save();
        IO.getIO().emit('put:isNoCall',updatedValue);
        res.status(201).json({message:'noCall Value Updated Successfully',statusCode:201,data:updatedValue});
    } catch (error) {
        res.status(500).json({message:error.message,statusCode:500});
    }
}

exports.getNoCall = async (req,res)=>{
    try {
        const savedNoCall = await noCall.findOne({_id:req.params.id});
        if (!savedNoCall) {
            return res.status(404).json({message:`No Call Value Not Found With this Id ${req.params.id}}`,statusCode:404});
        }
        IO.getIO().emit('get:isNoCall',savedNoCall);
        res.status(200).json({message:'noCall Fetched Successfully',statusCode:200,data:savedNoCall});
    } catch (error) {
        res.status(500).json({message:error.message,statusCode:500});
    }
}