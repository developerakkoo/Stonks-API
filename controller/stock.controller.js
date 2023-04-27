const Stock = require('../model/stocks.model');


async function createStock(req,res){
    const stockObj = {
        call: req.body.call,
        put: req.body.put,
        targetPrice: req.body.targetPrice,
        stopLoss:req.body.stopLoss
    }
    try {
        const stockCreated = await Stock.create(stockObj)
        const postResponse = {
            call: stockCreated.call,
            put: stockCreated.put,
            targetPrice: stockCreated.targetPrice,
            stopLoss: stockCreated.stopLoss
            
        }
        res.status(201).send(postResponse)
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message: "Some internal error while inserting the element"})
    }
}

async function getAllCalls(req,res){
    const calls= await Stock.find()
    res.status(201).send(calls)
}


async function updateCall(req,res){

    const call = await Stock.findOne({_id:req.params.id});
    if(!call){
        return res.status(400).send({message:"call does't exists"})
    }
    call.call = req.body.CALL 
    call.put = req.body.PUT 
    call.targetPrice = req.body.targetPrice 
    call.stopLoss = req.body.stopLoss 

    const updatePlan = await call.save();
    res.status(200).send(updatePlan);
}

async function deleteStock(req,res){
    _id = req.params.id; 
const stock = await Stock.findOne({_id:req.params.id});
if(!stock){
    return res.status(400).send({message:"plan does't exists"})
}
    await Stock.deleteOne({
        _id : req.params.id
    });
    res.status(200).send({message:`Successfully deleted  stock with id: ${req.params.id}`});
}

async function FindStockById(req,res){
const call = await Stock.findOne({_id:req.params.id});
if(!call){
    return res.status(400).send({message:"call does't exists"})
}
res.status(200).send(call)
}

async function FindStockByDate(req,res){
    
    let dates
    const pipeline = [{$match : {Date:req.params.date}}]
    dates = await Stock.aggregate(pipeline)
        
    res.status(200).send(dates)
}

//let s = await Stock.find({date :"23/08/2023", time:"2:30"})

// if(s){

// }





module.exports = 
{
    createStock,
    getAllCalls,
    FindStockById,
    updateCall,
    deleteStock,
    FindStockByDate
}