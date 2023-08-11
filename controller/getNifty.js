const IO = require('../socket');
const WebSocket = require('ws');
const  wsUri = "ws://nimblewebstream.lisuns.com:4575/";
const password = "df39da22-ff37-44c0-8f3c-44e7caf99172";

async function getNifty50(req,res){
    try{
      
      var output;
      var isAuthenticate = false;
        
      function testWebSocket(){
        try{
        websocket = new WebSocket(wsUri);
        websocket.onopen = function(evt) { onOpen(evt) };
        websocket.onclose = function(evt) { onClose(evt) };
        websocket.onmessage = function(evt) { onMessage(evt) };
        websocket.onerror = function(evt) { onError(evt) };
        }catch(error){
          console.log(error);
        }
      }
    
      function onOpen(evt)
      {
        Authenticate();  
      }
          function doClose()
      {
          websocket.close();
      }
      function onClose(evt){
        doClose()
      }
    
      function onMessage(evt){
        try {
          var event = JSON.parse(evt.data);
          if (event.MessageType == "AuthenticateResult")
            if (event.Complete){
              isAuthenticate = true;
              setTimeout(doTest1, 500);
            }
            writeToScreen(evt.data);	
        } catch (error) {
          console.log(error);
        }
      }
    
      function onError(evt){
        console.log(evt);
      }
    
      function doSend(message){
        try {
          var jsonmessage = JSON.stringify(message);
          websocket.send(jsonmessage);
          writeToScreen(jsonmessage);
        } catch (error) {
          console.log(error);        
        }
      }
      
      function doClose()
      {
          websocket.close();
      }
      function Authenticate(){
        try {
          const message = 
          {
              MessageType: "Authenticate",
              Password: password
            };
          doSend(message);
        } catch (error) {
          console.log(error);
        }
      }
      
      
    //GFDL TODO : All the functions supported by API are listed below. You can uncomment any function to see the flow of request and response
    function doTest1(){
        GetLastQuoteArray();					//GFDL : Returns LastTradePrice of multiple Symbols – max 25 in single call (detailed)
    }
    
    
    
    function GetLastQuoteArray(){
      try {
        var request = {
        MessageType: "GetLastQuoteArray",
        Exchange: "NSE_IDX",							//GFDL : Supported Values : NFO, NSE, NSE_IDX, CDS, MCX. Mandatory Parameter
        InstrumentIdentifiers: [{Value:"NIFTY 50"}],
        };
      doSend(request);
      } catch (error) {
        console.log(error);
      }
    }
    
  function writeToScreen(message){
    try {
      let data = JSON.parse(message);
      if (!data.Result) {
        }else{
          Result = data.Result
          IO.getIO().emit('get:Nifty50',Result[0].LastTradePrice)
          res.status(200).json({message:'Nifty50 Live',statusCode:200,data:Result[0].LastTradePrice});
        }
    } catch (error) {
      console.log(error);
    }
  }
  testWebSocket()
    }
      catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message,statusCode:500,status:'Error'});
    }
  }
  module.exports = {getNifty50}