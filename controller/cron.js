const stock = require('../model/stocks.model');
const noCall = require('../model/NoCalls.model');
const IO = require('../socket');
const moment = require('moment');
const cron = require('node-cron');
const nifty50Data = require('../model/nifty50Data');

cron.schedule('* * * * *',async () =>{
    try{
        
        let currentTime = moment().format('LT'); 
        if ('3:30 PM' === currentTime ||'3:31 PM'=== currentTime ||'3:32 PM'=== currentTime ||'3:33 PM'=== currentTime ||'3:34 PM'=== currentTime ||'3:35 PM'=== currentTime)  {
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

cron.schedule('* * * * *',async () =>{
    try{
        const id = moment().subtract(20,"day").format('DD-MM-YYYY');
        const Id = moment().subtract(10,"day").format('DD-MM-YYYY');
        const data =  await stock.find({ Date:id})
        if (!data===[]){
            console.log("Calls Not Found");
        }
        await stock.deleteMany({Date:id});
        await nifty50Data.deleteMany({Date:Id});
        console.log('Previous Calls History Deleted');
    }catch(error){
    }
})



        console.log('Previous Calls History Deleted');