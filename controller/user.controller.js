const User = require('../model/users.model');
require('../passport-setup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Subscription =  require('../model/subscription.model');
const nodemailer = require('nodemailer');
const path = require('path');
var jsonexport = require('jsonexport');
const csvWriter =  require('csv-writer');
const writer = csvWriter.createObjectCsvWriter(
    {path:'public/userData.csv',
    header:[
        { id: '_id', title: 'UserId'},
        { id: 'email', title: 'Email'},
        { id: 'name', title: 'Name' },
        { id: 'price', title: 'SubscriptionId'},
        { id: 'isActive', title: 'isActive' },
        { id: 'createdAt', title: 'Date'},
]});

let msg = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS_KEY
    }
}); 

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
        : savedUser.photo
    
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
    console.log('1234');
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
    console.log('here');
    try{
        
        const user =  await User.findOne({ _id:req.params.id}).populate('SubscriptionId') 
        if (!user){
            return res.status(400).json({message:"User Doesn't Exists"})
        }
        res.status(200).json({message:`User Fetched Successfully`,user});
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message,status:`ERROR`})
    }
    
}

async function exportData(req,res){
    console.log('here');
    try{
        
        const user =  await User.find({ }).populate('SubscriptionId') 
        if (!user){
            return res.status(400).json({message:"User Doesn't Exists"})
        }
        let x = user.SubscriptionId;
        console.log(user[1].SubscriptionId);
        res.status(200).json({message:`User Fetched Successfully`,user});
        jsonexport(user,function(err, csv){
            if(err) return console.log(err);
            console.log(csv);
        });
        writer.writeRecords(user)
        .then(() =>{
        console.log("DONE!");
        }).catch((error) =>{
        console.log(error);
        });
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

async function addFireBaseId(req,res){
    console.log('here');
    try{
        
        const savedUser =  await User.findOne({ _id:req.params.userId}).populate('SubscriptionId') 
        if (!savedUser){
            return res.status(400).json({message:"User Doesn't Exists"})
        }
        savedUser.firebaseToken = req.body.token != undefined
        ? req.body.token
        : savedUser.firebaseToken
        const updateUser = await savedUser.save();
        res.status(200).json({message:`User Fetched Successfully`,updateUser});
        
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message,status:`ERROR`})
    }
    
}

//sending mail about rest password with rest password page link
async function forgotPassword(req,res){
    const {email}= req.body;
    const savedUser = await User.findOne({ email: req.body.email });
    if(!savedUser){
        res.send('User Not Registered');
        return;
    }
    
    const payload = {
        userId: savedUser._id,
        email:savedUser.email 
    }
    let token = jwt.sign(payload, process.env.JWT_SECRET_KEY + savedUser.password, { expiresIn: 86400 });// 24 hours
    const Link = `http://localhost:8000/rest-password/${savedUser._id}/${token}`
    console.log(Link)


    let mailOptions = {
        from: 'serviceacount.premieleague@gmail.com',
        to: savedUser.email,
        subject:'Rest password' ,
        text:`Click on link to reset your password    ${Link}`
    };
    msg.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
    res.send('Password reset link has been sent to your email..!')
    
}

//user rest password page for getting the new password from user

async function getResetPassword(req,res){
    const{id,token} =  req.params;
    try{
        const user = await User.findOne({ _id: req.params.id })
        if(!user){
            res.send('Invalid Id...!');
        }
        const payload =jwt.verify(token,process.env.JWT_SECRET_KEY + user.password);
        res.render('reset-password',{email:user.email});

    }catch(error){
        console.log(error.message);
        res.send(error.message);
    }
}

//updating user password

async function ResetPassword(req,res){
    const{id,token} =  req.params;
    const user = await User.findOne({ _id: req.params.id });
    if(!user){
        res.send('Invalid Id...!');
    }
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET_KEY + user.password);
        
            user.password= bcrypt.hashSync(req.body.password, 16) ? bcrypt.hashSync(req.body.password, 16) : user.password
        const updatedUser= await user.save(user);
        const postRes = {
            Id:updatedUser._id,
            email:updatedUser.email,
            photo:updatedUser.photo
        }
        res.status(200).json({message:"Password Updated Successfully ",postRes});

    }catch(error){
        console.log(error.message);
        res.send(error.message);
    }
}

module.exports = {
    createUser,
    loginUser,
    addFireBaseId,
    postImage,
    userSubscribe,
    FindAll,
    UserCount,
    TotalActiveUser,
    FindById,
    UpdateUser,
    deleteUser,
    exportData,
    ResetPassword,
    getResetPassword,
    forgotPassword
}
