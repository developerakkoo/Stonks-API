const Stock = require('../model/stocks.model');
const scrapData = require('../model/scraperData.model');
const User = require('../model/users.model');
const moment = require('moment');
const admin = require('firebase-admin');
const axios = require('axios');
const serviceAccount  = require('../stonks-b66d4-be8791d7d5c7.json');
const IO = require('../socket');
const liveNifty50Data = require('../model/nifty50Data');

const csvWriter =  require('csv-writer');
const writer = csvWriter.createObjectCsvWriter(
    {path:'public/stokeData.csv',
    header:[
        { id: 'call', title: 'Call'},
        { id: 'entryPrice', title: 'entry Price' },
        { id: 'targetPrice', title: 'target Price' },
        { id: 'stopLoss', title: 'stop Loss'},
        { id: 'isCall', title: 'isCall'},
        { id: 'createdAt', title: 'Date'},
]});

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
    };
async function createStock(req,res){
    const tokens = []
    const stockObj = {
        call: req.body.call,
        targetPrice: req.body.targetPrice,
        stopLoss:req.body.stopLoss,
        isCall: req.body.isCall,
        entryPrice:req.body.entryPrice,
        Date: moment().format('DD-MM-YYYY'),
        Time:moment().format('LT')
    }
    try {
        const stockCreated = await Stock.create(stockObj);
        const savedUser = await User.find({
            isBlocked:false,

        });

        for(user of savedUser){
            if (user.firebaseToken == undefined) {
                continue;
            }
            tokens.push(user.firebaseToken)
            
        }
        
        const message= {
            notification: {
                title: 'Nifty Level Tracker',
                body: 'Calls Provided Based On The Recent Movement Of Nifty Level',
                sound: 'default',
                image:'https://api.niftyleveltracker.in/public/1689314621436.jpeg'
                },
                data: { key1: 'value1', key2: 'value2' }
            }
        
        const  registrationToken = tokens
        const options =  notification_options
        admin.messaging().sendToDevice(registrationToken,message, options)
        .then( response => {
        console.log({msg: "Notification sent successfully"});
        })
        .catch( error => {
            console.log({msg: error});
        });

        res.status(201).json({message:`Call Created successfully `,stockCreated});
        
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message:err.message,status:`ERROR`});
    }
}

//

async function getAllCalls(req,res){
    try{
        const calls= await Stock.find().sort({'createdAt': -1}).limit(10)
        if(!calls){
        return res.status(201).json({message:`Call's Not found `})
        }
        res.status(201).json({message:`All Call Fetched Successfully `,length:calls.length,calls})
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
        const stock = await Stock.find({Date:req.params.date}).sort({'createdAt':-1})
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
            '$match': {
                'Date': moment().format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline1 =
        [
            {
            '$match': {
                'Date': moment().subtract(1,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline2 =
        [
            {
            '$match': {
                'Date': moment().subtract(2,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline3 =
        [
            {
            '$match': {
                'Date': moment().subtract(3,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline4 =
        [
            {
            '$match': {
                'Date': moment().subtract(4,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline5 =
        [
            {
            '$match': {
                'Date': moment().subtract(5,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline6 =
        [
            {
            '$match': {
                'Date': moment().subtract(6,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline7 =
        [
            {
            '$match': {
                'Date': moment().subtract(7,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline8 =
        [
            {
            '$match': {
                'Date': moment().subtract(8,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const pipeline9 =
        [
            {
            '$match': {
                'Date': moment().subtract(9,"day").format('DD-MM-YYYY')
            }
            }, {
            '$sort': {
                'createdAt': -1
            }
            }
        ]
        const metaData = []
        const Data = await Stock.aggregate(pipeline)
        metaData.push(Data[0])
        const Data1 = await Stock.aggregate(pipeline1)
        metaData.push(Data1[0])
        const Data2 = await Stock.aggregate(pipeline2)
        metaData.push(Data2[0])
        const Data3 = await Stock.aggregate(pipeline3)
        metaData.push(Data3[0])
        const Data4 = await Stock.aggregate(pipeline4)
        metaData.push(Data4[0])
        const Data5 = await Stock.aggregate(pipeline5)
        metaData.push(Data5[0])
        const Data6 = await Stock.aggregate(pipeline6)
        metaData.push(Data6[0])
        const Data7 = await Stock.aggregate(pipeline7)
        metaData.push(Data7[0])
        const Data8 = await Stock.aggregate(pipeline8)
        metaData.push(Data8[0])
        const Data9 = await Stock.aggregate(pipeline9)
        metaData.push(Data9[0])

        const label = []
        const dataSet = []
        const data =[]
        for(item of metaData){
            if (item == undefined) {
                continue;
            }
            if (item.isLoss == true || item.isProfit == true) {
                label.push(item.Date)
            }
            
        }
        for(item of metaData){
            if (item == undefined) {
                continue;
            }
            
            if (item.isLoss == true) {
                console.log(Math.abs(item.entryPrice - item.trackNifty50[0].LTP));
                data.push(Math.abs(item.entryPrice - item.trackNifty50[0].LTP))
            }
            // data.push(0);
        }
        for(item of metaData){
            if (item == undefined) {
                continue;
            }
            if (item.isProfit == true) {
                
                dataSet.push(Math.abs(item.entryPrice - item.trackNifty50[0].LTP));
            }
            // dataSet.push(0);
        }
        // console.log("Date:",label);
        // metaData.forEach(item=>{
    
        //     data.push( Math.abs(item.entryPrice - item.stopLoss) )
        // })
        // metaData.forEach(item=>{
        //     dataSet.push( Math.abs(item.entryPrice - item.targetPrice) )
            
        // })
        const mainData ={
            label:label,
            profit:dataSet,
            loss:data 
        }

        IO.getIO().emit('get:Stock',mainData);
        // res.status(200).json({message:'ChartData',length:label.length,label})
        res.status(200).json({message:'ChartData',length:label.length,label,Profit:{dataSet},loss:{data}});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message,Status:'ERROR'});
    }

}

async  function get(req,res){
    const sub =  await Stock.updateMany({entryPrice:1000})
    res.status(200).json("ok")
}


async function exportExcelCalls(req,res){
    try{
        const calls= await Stock.find();
        if(calls.length==0){
        return res.status(201).json({message:`Call's Not found `})
        }
        res.status(201).json({message:`Excel Generated Successfully`,statusCode:200,DownloadLink:`${req.protocol +"://"+req.hostname +"/"+`public/stokeData.csv`}`})
        writer.writeRecords(calls)
        .then(() =>{
        console.log("DONE!");
        }).catch((error) =>{
        console.log(error);
        });
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}



async function trackNifty(req,res){
    try {
        // console.log(moment().subtract(1,'minutes').format('LT') );
        const date =  moment().format('DD-MM-YYYY');
        const time = moment().subtract(1,'minutes').format('LT') //'4:38:00 PM'
        const savedCall= await Stock.find({Date:date});
        const data = await liveNifty50Data.find({Date:date,Time:time});
        const latestData = data.length -1

        savedCall.forEach (async element => {
            if (data[latestData] ) {
                if (element.isCall == true) {
                    // console.log('>>sd',data[latestData]);
                    if (data[latestData].LTP == element.targetPrice ||data[latestData].LTP == element.targetPrice+1 ||data[latestData].LTP == element.targetPrice+2 ) {
                        if (element.isProfit == false && element.isLoss == false) {
                            console.log('isCall = true',data[latestData]);
                            element.trackNifty50.push(data[latestData]) ;
                            element.isProfit = true  
                            await element.save()
                        }
                    }
                }
                if (element.isCall == false) {
                    // console.log('isCall = false',data[latestData]);
                    if (data[latestData].LTP == element.targetPrice ||data[latestData].LTP == element.targetPrice-1 ||data[latestData].LTP == element.targetPrice-2) {
                        if (element.isLoss == false && element.isProfit == false) {
                            console.log(data[latestData].LTP,element.targetPrice);
                            element.trackNifty50.push(data[latestData]) ;
                            element.isProfit = true  
                            await element.save()
                        }
                    }
                }
                if (data[latestData].LTP == element.stopLoss || data[latestData].LTP == element.stopLoss-2 ||data[latestData].LTP == element.stopLoss-4) {
                    console.log('loss>>>>>>>>>>>>');
                    if(element.isLoss == false){
                    element.trackNifty50.push(data[latestData]) ;
                    element.isLoss = true  
                    await element.save()
                    }
                }
            }
        });
        } catch (error) {
            console.log(error.message);
    }
}
myInterval = setInterval(trackNifty, 10000);
// 

module.exports = 
{
    get,
    createStock,
    getAllCalls,
    FindStockById,
    updateCall,
    deleteStock,
    FindStockByDate,
    chartData,
    exportExcelCalls
}


