const freeSub =require('../model/freeSub.model');


exports.postFreeSub = async(req,res)=>{
    try {
        const subscriptionObj = {
            name: req.body.name,
            price: req.body.price,
            duration: req.body.duration,
            description:req.body.description
        }
        const subscriptionCreated = await freeSub.create(subscriptionObj)

        res.status(201).json({message:`Subscription Created Successfully`,subscriptionCreated})
    } catch (error) {
        res.status(500).json({message:error.message,statusCode:500,status:'ERROR'});
    }
}

exports.FindSubscriptionById= async(req,res)=>{
    try{
        const SubscriptionById = await freeSub.findOne({_id:req.params.id});
        if(!SubscriptionById){
            return res.status(400).json({message:"Subscription Does't Exists"})
        }
        res.status(200).json({message:`Subscription Fetched Successfully`,SubscriptionById})
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}


exports.updateFreePlans= async(req,res)=>{
    try{
        console.log("Id>>>",req.params.id)
        const plan = await freeSub.findOne({_id:req.params.id});
        if(!plan){
            return res.status(400).json({message:"plan does't exists"})
        } 
        plan.name = req.body.name   != undefined
        ? req.body.name 
        : plan.name ;

        plan.duration = req.body.duration    != undefined
        ? req.body.duration 
        : plan.duration ;

        plan.description = req.body.description    != undefined
        ? req.body.description 
        : plan.description ;

        const updatePlan = await plan.save();
        res.status(200).json({message:`Plan Updated Successfully`,updatePlan});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`});
    }
}


exports.deletePlans= async(req,res)=>{
    try{
        const plan = await freeSub.findOne({_id:req.params.id});
        if(!plan){
            return res.status(400).json({message:"plan does't exists"})
        }
            await Subscription.deleteOne({
                _id : req.params.id
            });
            res.status(200).json({message:`Successfully Deleted  Plan With Id: ${req.params.id}`});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
    }