const { name } = require('ejs');
const User = require ('../model/users.model');


async  function ValidateUsers(req, res, next){
    const userObj = {
        email:req.body.email,
        name: req.body.name,
        photo: req.body.photo
    }
    
    const user = await User.findOne({
        email:userObj.email,
        name:userObj.name
});
    if(!userObj.email){
        res.status(400).json({message:`Email Is Require`});
    }
    if(!userObj.name){
        res.status(400).json({message:`Name Is Require`});
    }
    if(!userObj.photo){
        res.status(400).json({message:`Photo Is Require`});
    }
next();
}


module.exports={
    ValidateUsers : ValidateUsers
}