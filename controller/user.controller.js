const User = require('../model/users.model');
require('../passport-setup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Subscription =  require('../model/subscription.model');


async function createUser (req,res){
    const defaultImage  = 'public/defaultProfile.png'
    try {    const userData = {
        name : req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password,10),
        photo : req.protocol +"://"+req.hostname +"/"+ defaultImage.replace(/\\/g, "/")
    }
    const checkUser =  await User.findOne({email:req.body.email});
    if(checkUser){
    return res.status(202).json({message:`User Already Exist with Email ${req.body.email} Please With Different Email `})
    }
        const createdUser = await User.create(userData);
    postRes = {
        ID:createdUser._id,
        name : createdUser.name,
        email: createdUser.email,
        Image: createdUser.photo
    }
        res.status(201).json({message:`User created Successfully`,User:postRes})
        }catch(error){
            res.status(500).json({status:'ERROR',message:error.message});
        }
    }
    
async function loginUser(req,res) {
    try     {    
        const email = req.body.email
        const password = req.body.password
        const savedUser = await User.findOne({email:email});
    if(!savedUser){
        return res.status(404).json({message:`User not found with this email ${req.body.email}`})
    }
    if(!(await bcrypt.compare(password, savedUser.password))){
        return res.status(401).json({message:`Incorrect Password`});
    }
        const payload = {
            userId: savedUser._id,
            email:  savedUser.email 
    }
    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '24h'});
    const postRes = {
        User : savedUser.name,
        Id:savedUser._id,
        accessToken : token
    }
    res.status(202).json({message:`User login successfully`,postRes});
    }catch(error){
    res.status(500).json({status:'ERROR',Message:error.message});
    }
}

async function postImage(req,res){
    try {
    
        const path = req.protocol +"://"+req.hostname +"/"+ req.file.path.replace(/\\/g, "/");
        const savedUser = await User.findOne({_id:req.params.userId});
        if(!savedUser){
        return res.status(404).json({message:`User Not Found With This userId: ${req.params.userId}`});
        }
        savedUser.photo = path != undefined
        ? path
        : savedTeam.photo
    
        const updatedUser = await savedUser.save();
        res.status(201).json({message:'User Photo Uploaded Successfully',updatedUser})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message,status:"ERROR" });
    }
}

// async function createUser(req,res){
//     const userObj = {

//         email:req.body.email,
//         name: req.body.name,
//         photo: req.body.photo
//     }
//     try {
//         const userCreated = await User.create(userObj)
//         const postResponse = {
//             email: userCreated.email,
//             name: userCreated.name,
            
//         }
//         res.status(201).json({message:`User Created Successfully`,userCreated});
//     }
//     catch (err) {
//         if(err.code == 11000){
//             return res.status(400).json({message: `User With This Email  Is Already Exist Please Try With Different  Email Address ` })
//         }
//         console.log("Something went wrong while saving to DB", err.message);
//         res.status(500).send({message:err.message,status:`ERROR`});
//     }
// }

async function FindAll(req,res){
    try{
        const user = await User.find()
        if(!user){
            return res.status(400).json({message:`Users Not Found`});
        }
        res.status(200).json({message:`User Fetched Successfully`, user});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
    
}

async function FindById(req,res){
    try{
        const user =  await User.findOne({ _id:req.params.id}).populate('SubscriptionId') 
        if (!user){
            return res.status(400).json({message:"User Doesn't Exists"})
        }
        res.status(200).json({message:`User Fetched Successfully`,user})
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}

async function UpdateUser(req,res){
    try{        
        const user = await User.findOne({_id:req.params.id});
    if (!user){
        return res.status(400).send({message:"user doesn't exists"})
    }
    user.email=req.body.email ? req.body.email : user.email;
    user.mobile=req.body.mobile ? req.body.mobile : user.mobile;
    const updateUser = await user.save();
    res.status(200).send({message:`User Record Has been Updated Successfully`,updateUser});
}catch(error){
    res.status(500).json({message:error.message,status:`ERROR`});
}
}

async function deleteUser (req, res){
    try{
        await User.findByIdAndDelete({
            _id:req.params.id
        });
        res.status(200).json({message:`User Deleted Successfully   With Id:${req.params.id}`});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`});
    }
}

async function UserCount(req,res){
    let user
    const pipeline = [[
        {
        '$count': 'usercount'
        }
    ]]
    try{    
        user = await User.aggregate(pipeline);
        if(!user){
            res.status(400).json({message:`User Count Not Found`});
        }
        res.status(200).json({message:`User Count`, user});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}

async function TotalActiveUser(req,res){
    try{
        const user = await User.find();
        if(!user){
            res.status(400).json({message:`Total user Count  Not Found`});
        }
        res.status(200).json({message:`Total Active User`, user});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`});
    }
}


async function userSubscribe(req,res,){
try {
    const savedSubscription = Subscription.findOne({_id:req.body.planId});
    if(!savedSubscription){
    return res.status(404).json({message:`Plan Not Found With Id:${req.body.planId}`});
    }
    const savedUser = await User.findOne({_id:req.body.userId});
    if(!savedUser){
        return res.status(404).json({message:`User Not Found With Id:${req.body.userId}`});
        }
        savedUser.SubscriptionId = req.body.planId  != undefined
        ? req.body.planId
        :savedUser.SubscriptionId

        const updatedUser = await savedUser.save()
        res.status(201).json({message:"Subscription Added Successfully",updatedUser})
} catch (error) {
    res.status(500).json({message:error.message,status:`ERROR`});
}
}

module.exports = {
    createUser,
    loginUser,
    postImage,
    userSubscribe,
    FindAll,
    UserCount,
    TotalActiveUser,
    FindById,
    UpdateUser,
    deleteUser
}
