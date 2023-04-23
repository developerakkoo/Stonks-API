const User = require('../model/users.model');

async function createUser(req,res){
    const userObj = {

        email:req.body.email,
        mobile: req.body.mobile
    }
    try {
        const userCreated = await User.create(userObj)
        const postResponse = {
            email: userCreated.email,
            mobile: userCreated.mobile,
            
        }
        res.status(201).send(postResponse)
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message: "Some internal error while inserting the element"});
    }
}

async function FindAll(req,res){
    const user = await User.find();
    res.status(200).send(user);

    
}

async function FindById(req,res){
    const user =  await User.findOne({ _id:req.params.id})
    if (!user){
        return res.status(400).send({message:"user doesn't exists"})
    }
    
    res.status(200).send(user)
}

async function UpdateUser(req,res){
    
        const user = await User.findOne({_id:req.params.id});
            
            if (!user){
                return res.status(400).send({message:"user doesn't exists"})
            }
            user.email=req.body.email ? req.body.email : user.email;
            user.mobile=req.body.mobile ? req.body.mobile : user.mobile;

            const updateUser = await user.save();
        
        res.status(200).send({  message: `User record has been updated successfully`,updateUser})
    
}

async function deleteUser (req, res){
    await User.findByIdAndDelete({
        _id:req.params.id
    });
    res.status(200).send({message:`Successfully delete user with id:${req.params.id}`})
}


async function UserCount(req,res){
    let user
    const pipeline = [[
        {
        '$count': 'usercount'
        }
    ]]

    user = await User.aggregate(pipeline)
    res.status(200).send(user);

    
}

async function TotalActiveUser(req,res){
    const user = await User.find();
    res.status(200).send(user);

    
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
