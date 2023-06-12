const User = require('../model/users.model');
require('../passport-setup')
const passport = require('passport')
const express= require('express');
const session = require('express-session');

async function createUser(req,res){
    const userObj = {

        email:req.body.email,
        name: req.body.name,
        photo: req.body.photo
    }
    try {
        const userCreated = await User.create(userObj)
        const postResponse = {
            email: userCreated.email,
            name: userCreated.name,
            
        }
        res.status(201).json({message:`User Created Successfully`,userCreated});
    }
    catch (err) {
        if(err.code == 11000){
            return res.status(400).json({message: `User With This Email  Is Already Exist Please Try With Different  Email Address ` })
        }
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message:err.message,status:`ERROR`});
    }
}

async function FindAll(req,res){
    try{
        const user = await User.find();
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
        const user =  await User.findOne({ _id:req.params.id})
        if (!user){
            return res.status(400).json({message:"User Doesn't Exists"})
        }
        res.status(200).json({message:`User Fetched Successfully`,user})
    }catch(error){
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

module.exports = {
    createUser,
    FindAll,
    UserCount,
    TotalActiveUser,
    FindById,
    UpdateUser,
    deleteUser
}
