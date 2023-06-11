const Subscription =  require('../model/subscription.model');
const moment = require('moment');



async function createSubscription(req,res){
    const subscriptionObj = {
        name: req.body.name,
        price: req.body.price,
        duration: req.body.duration,
        description:req.body.description
    }
    try {
        const subscriptionCreated = await Subscription.create(subscriptionObj)
        const postResponse = {
            name: subscriptionCreated.name,
            price: subscriptionCreated.price,
            duration: subscriptionCreated.duration,
            description: subscriptionCreated.description,
            
        }
        res.status(201).json({message:`Subscription Created Successfully`,postResponse})
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).json({message: err.message,status:`ERROR`});
    }
}

async function getAllPlans(req,res){
    try{
        const plans= await Subscription.find();
        if(!plans){
            res.status(400).json({message:`Subscription Not Found `});
        }
        res.status(201).json({message:`All Plans Fetched Successfully` ,plans});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`});
    }
}

async function updatePlans(req,res){
    try{
        console.log("Id>>>",req.params.id)
        const plan = await Subscription.findOne({_id:req.params.id});
        if(!plan){
            return res.status(400).json({message:"plan does't exists"})
        }
        plan.name = req.body.name 
        plan.price = req.body.price 
        plan.duration = req.body.duration 
        plan.description = req.body.description 
        const updatePlan = await plan.save();
        res.status(200).json({message:`Plan Updated Successfully`,updatePlan});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`});
    }
}


async function deletePlans(req,res){
    try{
        const plan = await Subscription.findOne({_id:req.params.id});
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

async function FindSubscriptionById(req,res){
    try{
        const SubscriptionById = await Subscription.findOne({_id:req.params.id});
        if(!SubscriptionById){
            return res.status(400).json({message:"Call Does't Exists"})
        }
        res.status(200).json({message:`Subscription Fetched Successfully`,SubscriptionById})
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
        }
        
async function getMonthlyInr(req,res){
            let plans
            const pipeline = [
                {
                    '$project': {
                    'price': true, 
                    'createdAt': {
                    '$month': '$createdAt'
                    }
                }
                },
                {
                    '$group': {
                    '_id': '$createdAt', 
                    'total': {
                    '$sum': '$price'
                    }
                }
                },{
                    '$sort': {
                        'createdAt': -1
                    }
                }
            ]
            try{
                plans = await Subscription.aggregate(pipeline);
                res.status(201).json({message:`Monthly Earning Fetched Successfully`, plans});
            }catch(error){
                res.status(500).json({message:error.message,status:`ERROR`});
            }
        
    }

async function getYearlyInr(req,res){
            let plans
            const pipeline =[
                {
                    '$project': {
                    'price': true, 
                    'createdAt': {
                    '$year': '$createdAt'
                    }
                }
                }, {
                    '$group': {
                    '_id': 'createdAt', 
                    'total': {
                    '$sum': '$price'
                    }
                }
                }
            ]
            try{
                plans = await Subscription.aggregate(pipeline)
                res.status(201).json({message:`Yearly Earning Fetched Successfully`, plans})
            }catch(error){
                res.status(500).json({message:error.message,status:`ERROR`})
            }
        }
module.exports = 
{
    createSubscription,
    getAllPlans,
    getMonthlyInr,
    getYearlyInr,
    FindSubscriptionById,
    updatePlans,
    deletePlans
}
