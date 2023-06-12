const Stock = require('../model/stocks.model');


async function createStock(req,res){
    const stockObj = {
        call: req.body.call,
        put: req.body.put,
        targetPrice: req.body.targetPrice,
        stopLoss:req.body.stopLoss,
	isCall: req.body.isCall
    }
    try {
        const stockCreated = await Stock.create(stockObj)
        const postResponse = {
            call: stockCreated.call,
            put: stockCreated.put,
            targetPrice: stockCreated.targetPrice,
            stopLoss: stockCreated.stopLoss,
            isCall: stockCreated.isCall
        }
        res.status(201).json({message:`Call Created successfully `,postResponse})
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message:err.message,status:`ERROR`});
    }
}

async function getAllCalls(req,res){
    try{
        const calls= await Stock.find();
        if(!calls){
        return res.status(201).json({message:`Call's Not found `})
        }
        res.status(201).json({message:`All Call Fetched Successfully `, calls})
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}


async function updateCall(req,res){
    try{
        const call = await Stock.findOne({_id:req.params.id});
        if(!call){
            return res.status(400).json({message:"call does't exists"})
        }
        call.call = req.body.CALL 
        call.put = req.body.PUT 
        call.targetPrice = req.body.targetPrice 
        call.stopLoss = req.body.stopLoss
	call.isCall = req.body.isCall 
        const updatePlan = await call.save();
        res.status(200).json({message:`Call Updated Successfully`, updatePlan});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}

async function deleteStock(req,res){
    try{
        _id = req.params.id; 
        const stock = await Stock.findOne({_id:req.params.id});
        if(!stock){
            return res.status(400).json({message:"call does't exists"})
        }
            await Stock.deleteOne({
                _id : req.params.id
            });
            res.status(200).json({message:`Successfully deleted  call with id: ${req.params.id}`});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}

async function FindStockById(req,res){
    try{
        const call = await Stock.findOne({_id:req.params.id});
        if(!call){
    return res.status(400).json({message:"call does't exists"})
    }
    res.status(200).json({message:`Call Fetched Successfully`,call})
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }

}

async function FindStockByDate(req,res){
    try{
        const stock = await Stock.find({Date:req.params.date});
        if(!stock){
            return res.status(400).json({message:`Call Not found`});
        }
        res.status(200).json({message:`Call Fetched Successfully`, stock});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`});
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
