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
    if(user){
        const err = new Error("User with this email or name already exist exists please try with different email");
        err.status = 'fail';
        err.statusCode = 404;
        next(err)
        //return res.status(400).send({message:"User with this email or name already exist exists please try with different email"})
    }
next();
}


module.exports={
    ValidateUsers : ValidateUsers
}