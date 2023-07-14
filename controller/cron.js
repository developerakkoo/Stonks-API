const stock = require('../model/stocks.model');
const noCall = require('../model/NoCalls.model');
const IO = require('../socket');
const moment = require('moment');
const cron = require('node-cron');


cron.schedule('* * * * *',async () =>{
    try{
        const id = moment().subtract(20,"day").format('DD-MM-YYYY')
        const data =  await stock.find({ Date:id})
        if (!data===[]){
            console.log("Calls Not Found");
        }
        await stock.deleteMany({Date:id})
        console.log('Previous Calls History Deleted');
    }catch(error){
    }
})


cron.schedule('* * * * *',async () =>{
    try{
        let marketCloseTime = '3:30 PM'
        let currentTime = moment().format('LT'); 
        if (marketCloseTime === currentTime)  {
            // console.log('here');
            const calls = await noCall.find({isNoCall:false});
            // console.log(calls);
            if (calls.length !== 0) {
                // console.log('>>');
                for (call of calls){
                await noCall.findByIdAndUpdate(call._id,{
                    isNoCall:true
                })
                }
            }
        }
console.log('noCall:true');
    }catch(error){
        console.log(error);
    }
})
        console.log('Previous Calls History Deleted');