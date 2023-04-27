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
    try{
        const calls= await Stock.find()
        res.status(201).send(calls)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}


async function updateCall(req,res){
    try{
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
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}

async function deleteStock(req,res){
    try{
        _id = req.params.id; 
        const stock = await Stock.findOne({_id:req.params.id});
        if(!stock){
            return res.status(400).send({message:"plan does't exists"})
        }
            await Stock.deleteOne({
                _id : req.params.id
            });
            res.status(200).send({message:`Successfully deleted  stock with id: ${req.params.id}`});
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}

async function FindStockById(req,res){
    try{
        const call = await Stock.findOne({_id:req.params.id});
        if(!call){
    return res.status(400).send({message:"call does't exists"})
    }
    res.status(200).send(call)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }

}

async function FindStockByDate(req,res){
    try{
        const stock = await Stock.find({Date:req.params.date});
        if(stock){
            res.status(200).json({stock})
        }
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}

module.exports = 
{
    createStock,
    getAllCalls,
    FindStockById,
    updateCall,
    deleteStock,
    FindStockByDate
}