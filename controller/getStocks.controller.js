console.log('getStock');
const axios = require('axios');
const IO = require('../socket');
const moment = require('moment');
const WebSocket = require('ws');

    const  wsUri = "ws://nimblewebstream.lisuns.com:4575/";
    const password = "df39da22-ff37-44c0-8f3c-44e7caf99172";
    var output;
    let isAuthenticate = false;
    function init()
    {
    testWebSocket();
    }
    function testWebSocket()
    {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
    }
    function onOpen(evt)
    {
    // writeToScreen("CONNECTED");
	// writeToScreen("Endpoint :"+wsUri);
    Authenticate();  
    }
    function onClose(evt)
    {
	writeToScreen("DISCONNECTED. Reason :"+evt.reason);
	writeToScreen("DISCONNECTED. Reason :"+evt.code);
	writeToScreen("Endpoint :"+wsUri);
    }
    function onMessage(evt)
    {
    var event = JSON.parse(evt.data);
    if (event.MessageType == "AuthenticateResult")
        if (event.Complete)
        {
            isAuthenticate = true;
			// writeToScreen('Time : ' + new Date( Date.now()) + 'RESPONSE: AUTHENTICATED!!!');	            
            setTimeout(doTest, 500);
        }
	//GFDL : Server sends Echo message every few seconds to confirm connection is live. To hide Echo Message, uncomment "if" statement below
		writeToScreen(  evt.data);	
    }
    function onError(evt){
	writeToScreen(' Time : ' + new Date( Date.now()));	
    writeToScreen('ERROR data: ' + evt.data);
    writeToScreen('ERROR message:' + evt.message);
    writeToScreen('ERROR reason:' + evt.reason);
	writeToScreen({Endpoint :wsUri});
    }
    function doSend(message)
    {
    const jsonmessage = JSON.stringify(message);
    websocket.send(jsonmessage);
	writeToScreen( jsonmessage);
    }
    function doClose()
    {
        websocket.close();
    }
  // GFDL : authentication request is sent by below code
    function Authenticate()
    {
        // writeToScreen("Authenticate");
    var message = 
    {
        MessageType: "Authenticate",
        Password: password
    };
    doSend(message);
    }
    
	setInterval(doTest, 1000)
function doTest()
{
	GetLastQuoteArray()
	// SubscribeRealtime();
function GetLastQuoteArray()
{
	const  request = 
		{
			MessageType: "GetLastQuoteArray",
			Exchange: "NSE",							
			InstrumentIdentifiers: [
			{Value:"TCS"}, {Value:"BAJAJ-AUTO"}, {Value:"BPCL"}, {Value:"INDUSINDBK"}, {Value:"AXISBANK"}, 
			{Value:"POWERGRID"}, {Value:"LT"}, {Value:"ULTRACEMCO"}, {Value:"CIPLA"}, {Value:"ADANIENT"}, 
			{Value:"GRASIM"}, {Value:"TATAMOTORS"}, {Value:"BRITANNIA"}, {Value:"NTPC"}, {Value:"DRREDDY"}, 
			{Value:"BAJFINANCE"}, {Value:"JSWSTEEL"}, {Value:"ICICIBANK"}, {Value:"TITAN"}, {Value:"HDFCBANK"}, 
			{Value:"HDFC"}, {Value:"NESTLEIND"}, {Value:"COALINDIA"}, {Value:"APOLLOHOSP"}, {Value:"SUNPHARMA"}, 
		],
		};
	const request1 = 
		{
			MessageType: "GetLastQuoteArray",
			Exchange: "NSE",							
			InstrumentIdentifiers: [
			{Value:"BAJAJFINSV"}, {Value:"DIVISLAB"}, {Value:"HDFCLIFE"}, {Value:"BHARTIARTL"}, {Value:"MARUTI"}, 
			{Value:"ADANIPORTS"}, {Value:"ASIANPAINT"}, {Value:"WIPRO"}, {Value:"KOTAKBANK"}, {Value:"M&M"}, 
			{Value:"RELIANCE"}, {Value:"TATACONSUM"}, {Value:"HINDALCO"}, {Value:"HEROMOTOCO"}, {Value:"TECHM"}, 
			{Value:"SBILIFE"}, {Value:"ITC"}, {Value:"ONGC"}, {Value:"INFY"}, {Value:"HCLTECH"}, 
			{Value:"HINDUNILVR"}, {Value:"UPL"}, {Value:"SBIN"}, {Value:"TATASTEEL"}, {Value:"EICHERMOT"}, 
		], 
		};
    const  request3 = 
		{
			MessageType: "GetLastQuoteArray",
			Exchange: "NSE_IDX",							
			InstrumentIdentifiers: [{Value:"NIFTY 50"}],
		};
	doSend(request);
	doSend(request1);
	doSend(request3);

    }					
}

let metaData =[]
let nifty50Data =[]
    function writeToScreen(message)
    {
		let data = JSON.parse(message);
    const Result = data.Result
    // console.log(typeof(Result));
    if (!Result) {
      //console.log('Data Not Available');
    }else{
      if (!Result.length == 0) {
        if (Result.length == 1) {
        // nifty50Data.push({SYMBOL:data.Result[0].InstrumentIdentifier,LTP: data.Result[0].LastTradePrice,CHNG: data.Result[0].PriceChange,PcCHNG: data.Result[0].PriceChangePercentage,sign: Math.sign(data.Result[0].PriceChangePercentage)})
        }
        // console.log(data.Result[0].InstrumentIdentifier,data.Result[0].PriceChangePercentage,"sign:"+ Math.sign(data.Result[0].PriceChangePercentage));
        for (Data of data.Result) {
  
            metaData.push({SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,PcCHNG: Data.PriceChangePercentage,sign: Math.sign(Data.PriceChangePercentage)})
          
        }
        // data.Result.forEach(Data => {
        // });
      }
    }
if (metaData.length == 50) {
  // console.log('>>>>>',metaData.length);
  IO.getIO().emit('get:Stocks',metaData);
  metaData = []
  // console.log('>>>>>',metaData.length);
  }
}

init()








async function getStock(req,res){

    const options = {
        method: 'GET',url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
        params: {
          region: 'IN',
          symbols: 'TCS.NS, ONGC.NS, BAJAJFINSV.NS, UPL.NS, BAJFINANCE.NS, SBILIFE.NS, BPCL.NS, ITC.NS, HINDALCO.NS, JSWSTEEL.NS,BAJAJ-AUTO.NS, KOTAKBANK.NS, COALINDIA.NS, M&M.NS, TATAMOTORS.NS, INFY.NS, EICHERMOT.NS, TATASTEEL.NS, TECHM.NS, RELIANCE.NS, NESTLEIND.NS, INDUSINDBK.NS, LT.NS, BRITANNIA.NS,BHARTIARTL.NS, ULTRACEMCO.NS, DRREDDY.NS, HCLTECH.NS, TATACONSUM.NS, ADANIENT.NS, HEROMOTOCO.NS, HDFCBANK.NS, WIPRO.NS, NTPC.NS, MARUTI.NS,TITAN.NS,DIVISLAB.NS,ICICIBANK.NS,ADANIPORTS.NS,HDFC.NS,ASIANPAINT.NS,CIPLA.NS,AXISBANK.NS,SBIN.NS,GRASIM.NS,SUNPHARMA.NS,APOLLOHOSP.NS,HINDUNILVR.NS,POWERGRID.NS,HDFCLIFE.NS'
        },headers: {
          'X-RapidAPI-Key': 'c6e48adc6dmsh05900b13b361ae0p17f651jsn7a03c8e8b550',
          'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };try {
          const response = await axios.request(options);
          const Data = response.data
          const metaData =[]
/**************************************************    SYMBOL    *************************************************************/

metaData.push({SYMBOL:Data['quoteResponse']['result'][0]['shortName'],LTP: Data['quoteResponse']['result'][0]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][0]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][0]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][0]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][1]['shortName'],LTP: Data['quoteResponse']['result'][1]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][1]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][1]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][1]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][2]['shortName'],LTP: Data['quoteResponse']['result'][2]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][2]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][2]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][2]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][3]['shortName'],LTP: Data['quoteResponse']['result'][3]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][3]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][3]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][3]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][4]['shortName'],LTP: Data['quoteResponse']['result'][4]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][4]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][4]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][4]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][5]['shortName'],LTP: Data['quoteResponse']['result'][5]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][5]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][5]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][5]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][6]['shortName'],LTP: Data['quoteResponse']['result'][6]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][6]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][6]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][6]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][7]['shortName'],LTP: Data['quoteResponse']['result'][7]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][7]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][7]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][7]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][8]['shortName'],LTP: Data['quoteResponse']['result'][8]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][8]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][8]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][8]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][9]['shortName'],LTP: Data['quoteResponse']['result'][9]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][9]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][9]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][9]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][10]['shortName'],LTP: Data['quoteResponse']['result'][10]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][10]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][10]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][10]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][11]['shortName'],LTP: Data['quoteResponse']['result'][11]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][11]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][11]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][11]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][12]['shortName'],LTP: Data['quoteResponse']['result'][12]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][12]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][12]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][12]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][13]['shortName'],LTP: Data['quoteResponse']['result'][13]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][13]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][13]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][13]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][14]['shortName'],LTP: Data['quoteResponse']['result'][14]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][14]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][14]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][14]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][15]['shortName'],LTP: Data['quoteResponse']['result'][15]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][15]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][15]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][15]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][16]['shortName'],LTP: Data['quoteResponse']['result'][16]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][16]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][16]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][16]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][17]['shortName'],LTP: Data['quoteResponse']['result'][17]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][17]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][17]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][17]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][18]['shortName'],LTP: Data['quoteResponse']['result'][18]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][18]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][18]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][18]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][19]['shortName'],LTP: Data['quoteResponse']['result'][19]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][19]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][19]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][19]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][20]['shortName'],LTP: Data['quoteResponse']['result'][20]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][20]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][20]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][20]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][21]['shortName'],LTP: Data['quoteResponse']['result'][21]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][21]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][21]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][21]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][22]['shortName'],LTP: Data['quoteResponse']['result'][22]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][22]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][22]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][22]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][23]['shortName'],LTP: Data['quoteResponse']['result'][23]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][23]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][23]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][23]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][24]['shortName'],LTP: Data['quoteResponse']['result'][24]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][24]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][24]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][24]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][25]['shortName'],LTP: Data['quoteResponse']['result'][25]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][25]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][25]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][25]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][26]['shortName'],LTP: Data['quoteResponse']['result'][26]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][26]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][26]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][26]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][27]['shortName'],LTP: Data['quoteResponse']['result'][27]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][27]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][27]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][27]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][28]['shortName'],LTP: Data['quoteResponse']['result'][28]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][28]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][28]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][28]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][29]['shortName'],LTP: Data['quoteResponse']['result'][29]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][29]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][29]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][29]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][30]['shortName'],LTP: Data['quoteResponse']['result'][30]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][30]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][30]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][30]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][31]['shortName'],LTP: Data['quoteResponse']['result'][31]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][31]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][31]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][31]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][32]['shortName'],LTP: Data['quoteResponse']['result'][32]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][32]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][32]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][32]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][33]['shortName'],LTP: Data['quoteResponse']['result'][33]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][33]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][33]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][33]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][34]['shortName'],LTP: Data['quoteResponse']['result'][34]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][34]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][34]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][34]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][35]['shortName'],LTP: Data['quoteResponse']['result'][35]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][35]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][35]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][35]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][36]['shortName'],LTP: Data['quoteResponse']['result'][36]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][36]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][36]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][36]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][37]['shortName'],LTP: Data['quoteResponse']['result'][37]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][37]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][37]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][37]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][38]['shortName'],LTP: Data['quoteResponse']['result'][38]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][38]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][38]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][38]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][39]['shortName'],LTP: Data['quoteResponse']['result'][39]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][39]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][39]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][39]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][40]['shortName'],LTP: Data['quoteResponse']['result'][40]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][40]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][40]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][40]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][41]['shortName'],LTP: Data['quoteResponse']['result'][41]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][41]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][41]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][41]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][42]['shortName'],LTP: Data['quoteResponse']['result'][42]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][42]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][42]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][42]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][43]['shortName'],LTP: Data['quoteResponse']['result'][43]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][43]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][43]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][43]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][44]['shortName'],LTP: Data['quoteResponse']['result'][44]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][44]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][44]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][44]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][45]['shortName'],LTP: Data['quoteResponse']['result'][45]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][45]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][45]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][45]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][46]['shortName'],LTP: Data['quoteResponse']['result'][46]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][46]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][46]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][46]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][47]['shortName'],LTP: Data['quoteResponse']['result'][47]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][47]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][47]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][47]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][48]['shortName'],LTP: Data['quoteResponse']['result'][48]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][48]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][48]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][48]['regularMarketChange'].toString().split('.')[0])})
metaData.push({SYMBOL:Data['quoteResponse']['result'][49]['shortName'],LTP: Data['quoteResponse']['result'][49]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][49]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][49]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][49]['regularMarketChange'].toString().split('.')[0])})


    IO.getIO().emit('get:Stocks',metaData);
    res.status(200).json(metaData)
      }

/*******************************************************************************************************************************/
    catch (error) {
    console.error(error);
    res.status(500).json({message:error.message,status:`ERROR`})
    }
  }
    
async function getNifty50(req,res){
  const options = {
    method: 'GET',url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
    params: {
      region: 'IN',
      symbols: '^NSEI'
    },headers: {
      'X-RapidAPI-Key': 'c6e48adc6dmsh05900b13b361ae0p17f651jsn7a03c8e8b550',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
    };try {
      const response = await axios.request(options);
      const Data = response.data
      const nifty50Data =[]
      nifty50Data.push({SYMBOL:Data['quoteResponse']['result'][0]['shortName'],LTP: Data['quoteResponse']['result'][0]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][0]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][0]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][0]['regularMarketChange'].toString().split('.')[0])});
      IO.getIO().emit('get:Nifty50',nifty50Data);
      res.status(200).json({message:'Nifty50 Live',statusCode:200,data:nifty50Data});
      
        }
      catch (error) {
          console.log(error)
          res.status(500).json({message:error.message,statusCode:500,status:'Error'});
    }
  }
module.exports={
    getStock,
    getNifty50
}