const Image = require('../model/IMG.model');
const DeleteImg =  require('../constant/DImage');

exports.postImage = async(req,res)=>{
    try {
        const path = req.protocol +"://"+req.hostname +"/"+ req.file.path.replace(/\\/g, "/");
        const url = req.file.path.replace(/\\/g, "/");

        const createdImage = await Image.create({Image:path,ImageUrl:url});
        res.status(200).json({message:"Image Uploaded Successfully",data:createdImage});
    } catch (error) {
        res.status(500).json({message:error.message,statusCode:500,status:'ERROR'});
    }
}

exports.UpdateImage = async(req,res)=>{
    try {
    
        const path = req.protocol +"://"+req.hostname +"/"+ req.file.path.replace(/\\/g, "/");
        const url = req.file.path.replace(/\\/g, "/");
        const savedImage = await Image.findOne({_id:req.params.imageId});
        if(!savedImage){
        return res.status(404).json({message:`User Not Found With This imageId: ${req.params.imageId}`});
        }
        DeleteImg.clearImage(savedImage.ImageUrl);
        savedImage.Image = path != undefined
        ? path
        : savedUser.Image
        savedImage.ImageUrl = url != undefined
        ? url
        : savedUser.ImageUrl
    
        const updatedImage = await savedImage.save();
        res.status(201).json({message:'Image Uploaded Successfully',data:updatedImage})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message,status:"ERROR" });
    }
}

exports.getAllImage = async(req,res)=>{
    try {
        const savedImage = await Image.find();
        if (savedImage.length === 0) {
            return req.status(404).json({message:'Images Not Found',statusCode:404})
        }
        res.status(200).json({message:'All images fetched Successfully',length:savedImage.length,data:savedImage});
    } catch (error) {
        res.status(500).json({message: error.message,status:"ERROR" });
    }
}

exports.getImageById = async(req,res)=>{
    try {
        const savedImage = await Image.find({_id:req.params.imageId});
        if (!savedImage) {
            return req.status(404).json({message:'Images Not Found',statusCode:404})
        }
        res.status(200).json({message:'Image fetched Successfully',data:savedImage});
    } catch (error) {
        res.status(500).json({message: error.message,status:"ERROR" });
    }
}

exports.get = async(req,res)=>{
    try {
        const savedImage = req.body

        res.status(200).json({message:'fetched Successfully',savedImage});
    } catch (error) {
        res.status(500).json({message: error.message,status:"ERROR" });
    }
}