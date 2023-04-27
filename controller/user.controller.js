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
        res.status(201).send(postResponse)
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message: "Some internal error while inserting the element"});
    }
}

async function FindAll(req,res){
    try{
        const user = await User.find();
        res.status(200).send(user);
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
    
}

async function FindById(req,res){
    try{
        const user =  await User.findOne({ _id:req.params.id})
        if (!user){
            return res.status(400).send({message:"user doesn't exists"})
        }
        res.status(200).send(user)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
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
    res.status(200).send({  message: `User record has been updated successfully`,updateUser})
}catch(error){
    res.status(500).json({message:"something went wrong"})
}
}

async function deleteUser (req, res){
    try{
        await User.findByIdAndDelete({
            _id:req.params.id
        });
        res.status(200).send({message:`Successfully delete user with id:${req.params.id}`})
    }catch(error){
        res.status(500).json({message:"something went wrong"})
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
        user = await User.aggregate(pipeline)
        res.status(200).send(user);
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}

async function TotalActiveUser(req,res){
    try{
        const user = await User.find();
        res.status(200).send(user);
    }catch(error){
        res.status(500).json({message:"something went wrong"})
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
