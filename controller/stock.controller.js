const Stock = require('../model/stocks.model');
const moment = require('moment');
const IO = require('../socket');

async function createStock(req,res){
    const stockObj = {
        call: req.body.call,
        put: req.body.put,
        targetPrice: req.body.targetPrice,
        stopLoss:req.body.stopLoss,
        isCall: req.body.isCall,
        entryPrice:req.body.entryPrice
    }
    try {
        const stockCreated = await Stock.create(stockObj)

        res.status(201).json({message:`Call Created successfully `,stockCreated})
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
        call.call = req.body.CALL !=undefined
        ? req.body.CALL
        :call.call
        call.put = req.body.PUT !=undefined
        ? req.body.PUT
        : call.put
        call.targetPrice = req.body.targetPrice !=undefined
        ?req.body.targetPrice
        :call.targetPrice
        call.stopLoss = req.body.stopLoss !=undefined
        ? req.body.stopLoss
        :call.stopLoss 
        call.entryPrice = req.body.entryPrice !=undefined
        ? req.body.entryPrice
        :call.entryPrice
        call.isCall = req.body.isCall !=undefined
        ? req.body.isCall
        :call.isCall
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
        if(stock.length == 0){
            return res.status(400).json({message:`Call Not found`});
        }
        res.status(200).json({message:`Call Fetched Successfully`,length:stock.length,stock});
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`});
    }
}

async function chartData(req, res, next){
    try {
        const Start = moment().subtract(10,"day").format('DD-MM-YYYY')
        const End =moment().format('DD-MM-YYYY')
        // console.log(Start,End);
        const pipeline =
        [
            { 
                $match: {
                Date: {
                    $gte: Start,
                    $lte: End,
                },
                },
            },
            {
                '$sort': {
                    'Date': 1
                }
            }
        ]
        const Data = await Stock.aggregate(pipeline)
        
        const label = []
        const dataSet = []
        const data =[]
        Data.forEach(item=>{
            label.push(item.Date)
            
        })
        Data.forEach(item=>{
            data.push( item.entryPrice - item.stopLoss )
        })
        Data.forEach(item=>{
            dataSet.push( item.entryPrice - item.targetPrice )
            
        })
        const mainData ={
            label:label,
            profit:dataSet,
            loss:data
            
        }

        IO.getIO().emit('get:Stock',mainData);
        res.status(200).json({message:'ChartData',label,Profit:{dataSet},loss:{data}});
    } catch (error) {
        res.status(500).json({message:error.message,Status:'ERROR'});
    }

}

async  function get(req,res){
    const sub =  await Stock.updateMany({entryPrice:1000})
    res.status(200).json("ok")
}

module.exports = 
{
    get,
    createStock,
    getAllCalls,
    FindStockById,
    updateCall,
    deleteStock,
    FindStockByDate,
    chartData
}


//export to excel
//firebase notify if 14 day left