// const moment = require ('moment');
// const momentTime= moment()
// let crTime = moment().format('hh.mm')
// let timeDelay = moment().subtract(10,"m").format('hh.mm')
// console.log(`crTime: ${crTime}`);
// console.log(`timeDelay: ${timeDelay}`);

// const time = moment().add(1,'day').format('DD-MM-YYYY')
// console.log("day",time)
// console.log(moment().format('DD-MM-YYYY'))
// const time1 = moment().subtract(20,"day").format('DD-MM-YYYY')
// const t =moment().add(5, 'days').format('DD-MM-YYYY')  
// console.log("Time1",time1)
// let m3 = moment(moment(crTime,"hh:mm").diff(moment(m2,"hh:mm"))).format("hh:mm"); 
// console.log(m3);
// let n=11.04
// console.log(n.toFixed(2))

// console.log(`current time ${crTime}`);
// momentTime.subtract(10,"minute")
// console.log(`manipulated time ${momentTime.toString()}`)

// console.log(moment().format('LT'));

// var jsonexport = require('jsonexport');
// const fs = require('fs')
// var contacts = [   {
//     userName: 'Scribble Studio',
//     email: 'akkijadhav079@gmail.com',
//     isActive: false,
//     isBlocked: false,
//     SubscriptionName: 'Basic',
//     price: 100,
//     duration: '1',
const axios = require('axios');
async function getStock(){
    const options = {
        method: 'GET',url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
        params: {
            region: 'IN',
            symbols: 'TCS.NS'
        },headers: {
            'X-RapidAPI-Key': 'c6e48adc6dmsh05900b13b361ae0p17f651jsn7a03c8e8b550',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };try {
            const response = await axios.request(options);
            const Data = response.data
            const metaData =[]
/**************************************************    SYMBOL    *************************************************************/

metaData.push({SYMBOL:Data['quoteResponse']['result'][0]['shortName'],LTP: Data['quoteResponse']['result'][0]['regularMarketPrice'],CHNG:Data['quoteResponse']['result'][0]['regularMarketChange'],PcCHNG: parseFloat(Data['quoteResponse']['result'][0]['regularMarketChangePercent'].toFixed(2)),Open: Data['quoteResponse']['result'][0]['regularMarketOpen'],HIGH:Data['quoteResponse']['result'][0]['regularMarketDayHigh'],Low:Data['quoteResponse']['result'][0]['regularMarketDayLow'],Volume:Data['quoteResponse']['result'][0]['regularMarketVolume'],fiftyTwoWeekLow:Data['quoteResponse']['result'][0]['fiftyTwoWeekLow'],fiftyTwoWeekHigh:Data['quoteResponse']['result'][0]['fiftyTwoWeekHigh'],PREVCLOSE:Data['quoteResponse']['result'][0]['regularMarketPreviousClose']})


    // IO.getIO().emit('get:Stocks',metaData);
    console.log(metaData);
    }

/*******************************************************************************************************************************/
    catch (error) {
    console.error(error);
    // res.status(500).json({message:error.message,status:`ERROR`})
    }
}
getStock()

