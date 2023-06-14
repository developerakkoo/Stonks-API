const { name } = require('ejs');
const User = require ('../model/users.model');


async  function ValidateUsers(req, res, next){
    const userObj = {
        email:req.body.email,
        name: req.body.name,
        password: req.body.password
    }
    if(!userObj.email){
        return res.status(400).json({message:`Email Is Require`});
    }
    if(!userObj.name){
        return res.status(400).json({message:`Name Is Require`});
    }
    if(!userObj.password){
        return res.status(400).json({message:`password Is Require`});
    }
next();
}


module.exports={
    ValidateUsers : ValidateUsers
}