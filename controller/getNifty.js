const IO = require('../socket');
const WebSocket = require('ws');
const  wsUri = "ws://nimblewebstream.lisuns.com:4575/";
const password = "df39da22-ff37-44c0-8f3c-44e7caf99172";

async function getNifty50(req,res){
    try{
      
      var output;
      var isAuthenticate = false;
    
      
        // output = document.getElementById("output");
        
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
    
      function onClose(evt){
      }
    
      function onMessage(evt)
      {
        var event = JSON.parse(evt.data);
        if (event.MessageType == "AuthenticateResult")
            if (event.Complete)
            {
                isAuthenticate = true;
                setTimeout(doTest1, 500);
            }
            
            writeToScreen(evt.data);	
      }
    
      function onError(evt)
      {
        // writeToScreen('<span style="color: red;"> Time : ' + new Date( Date.now()) + '</span>');	
        // writeToScreen('<span style="color: red;">ERROR data:</span> ' + evt.data);
        // writeToScreen('<span style="color: red;">ERROR message:</span> ' + evt.message);
        // writeToScreen('<span style="color: red;">ERROR reason:</span> ' + evt.reason);
        // writeToScreen("Endpoint :"+wsUri);
      }
    
      function doSend(message)
      {
        var jsonmessage = JSON.stringify(message);
        websocket.send(jsonmessage);
        writeToScreen(jsonmessage);
      }
      
      function doClose()
      {
          websocket.close();
      }
    
      // GFDL : authentication request is sent by below code
      function Authenticate()
      {
        //  writeToScreen("Authenticate");
        var message = 
        {
           MessageType: "Authenticate",
           Password: password
         };
        doSend(message);
      }
      
      
    //GFDL TODO : All the functions supported by API are listed below. You can uncomment any function to see the flow of request and response
    function doTest1(){
        GetLastQuoteArray();					//GFDL : Returns LastTradePrice of multiple Symbols – max 25 in single call (detailed)
    }
    
    
    
    function GetLastQuoteArray(){
            var request = 
                {
                    MessageType: "GetLastQuoteArray",
                    Exchange: "NSE_IDX",							//GFDL : Supported Values : NFO, NSE, NSE_IDX, CDS, MCX. Mandatory Parameter
                    InstrumentIdentifiers: [{Value:"NIFTY 50"}],
                    //isShortIdentifiers: "true"					//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
                                                                //this argument must be sent with value "true" 
                    
                };
        doSend(request);
    }
    
    function writeToScreen(message){
      let data = JSON.parse(message);
      
      if (data.Result) {
        Result = data.Result
        // console.log(Result);
        // console.log(Result[0]);
        IO.getIO().emit('get:Nifty50',Result[0].LastTradePrice)
        return res.status(200).json({message:'Nifty50 Live',statusCode:200,data:Result[0].LastTradePrice});
        
        }
      }
      testWebSocket()
          // const response = await axios.request(options);
          // const Data = response.data
          // const nifty50Data =[]
          // nifty50Data.push({SYMBOL:Data['quoteResponse']['result'][0]['shortName'],LTP: Data['quoteResponse']['result'][0]['regularMarketPrice'],CHNG: parseFloat(Data['quoteResponse']['result'][0]['regularMarketChange'].toFixed(2)),PcCHNG: parseFloat(Data['quoteResponse']['result'][0]['regularMarketChangePercent'].toFixed(2)),sign: Math.sign(Data['quoteResponse']['result'][0]['regularMarketChange'].toString().split('.')[0])});
          // IO.getIO().emit('get:Nifty50',nifty50Data);
          // res.status(200).json({message:'Nifty50 Live',statusCode:200,data:nifty50Data});
          
            }
          catch (error) {
              console.log(error)
              res.status(500).json({message:error.message,statusCode:500,status:'Error'});
        }
      }

    module.exports = {getNifty50}