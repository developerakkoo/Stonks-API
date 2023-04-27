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
        res.status(201).send(postResponse)
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message: "Some internal error while inserting the element"})
    }
}

async function getAllPlans(req,res){
    try{
        const plans= await Subscription.find()
        res.status(201).send(plans)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}

async function updatePlans(req,res){
    try{
        console.log("Id>>>",req.params.id)
        const plan = await Subscription.findOne({_id:req.params.id});
        if(!plan){
            return res.status(400).send({message:"plan does't exists"})
        }
        plan.name = req.body.name 
        plan.price = req.body.price 
        plan.duration = req.body.duration 
        plan.description = req.body.description 
        const updatePlan = await plan.save();
        res.status(200).send(updatePlan);
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}


async function deletePlans(req,res){
    try{
        const plan = await Subscription.findOne({_id:req.params.id});
        if(!plan){
            return res.status(400).send({message:"plan does't exists"})
        }
            await Subscription.deleteOne({
                _id : req.params.id
            });
            res.status(200).send({message:`Successfully deleted  plan with id: ${req.params.id}`});
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
    }

async function FindSubscriptionById(req,res){
    try{
        const SubscriptionById = await Subscription.findOne({_id:req.params.id});
        if(!SubscriptionById){
            return res.status(400).send({message:"call does't exists"})
        }
        res.status(200).send(SubscriptionById)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
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
                res.status(201).send(plans)
            }catch(error){
                res.status(500).json({message:"something went wrong"})
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
                res.status(201).send(plans)
            }catch(error){
                res.status(500).json({message:"something went wrong"})
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