const moment = require('moment');
const stock = require('../model/stocks.model');
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
