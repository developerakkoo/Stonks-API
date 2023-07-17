const Data = require('../model/scraperData.model')
const  mongoose         = require('mongoose');
const {google}= require('googleapis');
const key = require('../keys.json');
const mongoosePaginate = require('mongoose-paginate');
const moment= require ('moment')
const momentTime= moment()

const client = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'] // scope of the app https://developers.google.com/identity/protocols/oauth2/scopes#sheets
);
client.authorize(function(err,tokens){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('connected!')
    }
});


async function scrapData(req,res){
    const nifty50Data=req.body.nifty50Data
    const data1=req.body.data1
    const data2 = req.body.data2
    const data3 = req.body.data3
    const data4 = req.body.data4
    const data5 = req.body.data5
    const data6 = req.body.data6
    const data7 = req.body.data7
    const data8 = req.body.data8
    const data9 = req.body.data9
    const data10 = req.body.data10
    const data11 = req.body.data11
    const data12 = req.body.data12
    const data13 = req.body.data13
    const data14 = req.body.data14
    const data15 = req.body.data15
    const data16 = req.body.data16
    const data17 = req.body.data17
    const data18 = req.body.data18
    const data19 = req.body.data19
    const data20 = req.body.data20
    const data21 = req.body.data21
    const data22 = req.body.data22
    const data23 = req.body.data23
    const data24 = req.body.data24
    const data25 = req.body.data25
    const data26 = req.body.data26
    const data27 = req.body.data27
    const data28 = req.body.data28
    const data29 = req.body.data29
    const data30 = req.body.data30
    const data31 = req.body.data31
    const data32 = req.body.data32
    const data33 = req.body.data33
    const data34 = req.body.data34
    const data35 = req.body.data35
    const data36 = req.body.data36
    const data37 = req.body.data37
    const data38 = req.body.data38
    const data39 = req.body.data39
    const data40 = req.body.data40
    const data41 = req.body.data41
    const data42 = req.body.data42
    const data43 = req.body.data43
    const data44 = req.body.data44
    const data45 = req.body.data45
    const data46 = req.body.data46
    const data47 = req.body.data47
    const data48 = req.body.data48
    const data49 = req.body.data49
    const data50 = req.body.data50
    const data51 = req.body.data51

    const nifty50DataObj={
        SYMBOL:nifty50Data[0].SYMBOL,
        OPEN:nifty50Data[0].OPEN,
        HIGH:nifty50Data[0].HIGH,
        LOW:nifty50Data[0].LOW,
        PREVCLOSE:nifty50Data[0].PREVCLOSE,
        LTP:nifty50Data[0].LTP,
        CHNG:nifty50Data[0].CHNG,
        CHANGPercentage:nifty50Data[0].CHANGPercentage,
        VOLUME:nifty50Data[0].VOLUME,
        fiftyTwo_WH:nifty50Data[0].fiftyTwo_WH,
        fiftyTwo_WL:nifty50Data[0].fiftyTwo_WL,
        Date:nifty50Data[0].Date,
        Time:nifty50Data[0].Time,
        Date_Time:nifty50Data[0].Date_Time
    }

    const DataObj1={
        SYMBOL:data1.SYMBOL,
        OPEN:data1.OPEN,
        HIGH:data1.HIGH,
        LOW:data1.LOW,
        PREVCLOSE:data1.PREVCLOSE,
        LTP:data1.LTP,
        CHNG:data1.CHNG,
        CHANGPercentage:data1.CHANGPercentage,
        VOLUME:data1.VOLUME,
        fiftyTwo_WH:data1.fiftyTwo_WH,
        fiftyTwo_WL:data1.fiftyTwo_WL,
        Date:data1.Date,
        Time:data1.Time,
        Date_Time:data1.Date_Time
    }

    const DataObj2={
        SYMBOL:data2.SYMBOL,
        OPEN:data2.OPEN,
        HIGH:data2.HIGH,
        LOW:data2.LOW,
        PREVCLOSE:data2.PREVCLOSE,
        LTP:data2.LTP,
        CHNG:data2.CHNG,
        CHANGPercentage:data2.CHANGPercentage,
        VOLUME:data2.VOLUME,
        fiftyTwo_WH:data2.fiftyTwo_WH,
        fiftyTwo_WL:data2.fiftyTwo_WL,
        Date:data2.Date,
        Time:data2.Time
    }
    const DataObj3={
        SYMBOL:data3.SYMBOL,
        OPEN:data3.OPEN,
        HIGH:data3.HIGH,
        LOW:data3.LOW,
        PREVCLOSE:data3.PREVCLOSE,
        LTP:data3.LTP,
        CHNG:data1.CHNG,
        CHANGPercentage:data3.CHANGPercentage,
        VOLUME:data3.VOLUME,
        fiftyTwo_WH:data3.fiftyTwo_WH,
        fiftyTwo_WL:data3.fiftyTwo_WL,
        Date:data3.Date,
        Time:data3.Time
    }
    const DataObj4={
        SYMBOL:data4.SYMBOL,
        OPEN:data4.OPEN,
        HIGH:data4.HIGH,
        LOW:data4.LOW,
        PREVCLOSE:data4.PREVCLOSE,
        LTP:data4.LTP,
        CHNG:data4.CHNG,
        CHANGPercentage:data4.CHANGPercentage,
        VOLUME:data4.VOLUME,
        fiftyTwo_WH:data4.fiftyTwo_WH,
        fiftyTwo_WL:data4.fiftyTwo_WL,
        Date:data4.Date,
        Time:data4.Time
    }
    const DataObj5={
        SYMBOL:data5.SYMBOL,
        OPEN:data5.OPEN,
        HIGH:data5.HIGH,
        LOW:data5.LOW,
        PREVCLOSE:data5.PREVCLOSE,
        LTP:data5.LTP,
        CHNG:data5.CHNG,
        CHANGPercentage:data5.CHANGPercentage,
        VOLUME:data5.VOLUME,
        fiftyTwo_WH:data5.fiftyTwo_WH,
        fiftyTwo_WL:data5.fiftyTwo_WL,
        Date:data5.Date,
        Time:data5.Time
    }
    const DataObj6={
        SYMBOL:data6.SYMBOL,
        OPEN:data6.OPEN,
        HIGH:data6.HIGH,
        LOW:data6.LOW,
        PREVCLOSE:data6.PREVCLOSE,
        LTP:data6.LTP,
        CHNG:data6.CHNG,
        CHANGPercentage:data6.CHANGPercentage,
        VOLUME:data6.VOLUME,
        fiftyTwo_WH:data6.fiftyTwo_WH,
        fiftyTwo_WL:data6.fiftyTwo_WL,
        Date:data6.Date,
        Time:data6.Time
    }
    const DataObj7={
        SYMBOL:data7.SYMBOL,
        OPEN:data7.OPEN,
        HIGH:data7.HIGH,
        LOW:data7.LOW,
        PREVCLOSE:data7.PREVCLOSE,
        LTP:data7.LTP,
        CHNG:data7.CHNG,
        CHANGPercentage:data7.CHANGPercentage,
        VOLUME:data7.VOLUME,
        fiftyTwo_WH:data7.fiftyTwo_WH,
        fiftyTwo_WL:data7.fiftyTwo_WL,
        Date:data7.Date,
        Time:data7.Time
    }
    const DataObj8={
        SYMBOL:data8.SYMBOL,
        OPEN:data8.OPEN,
        HIGH:data8.HIGH,
        LOW:data8.LOW,
        PREVCLOSE:data8.PREVCLOSE,
        LTP:data8.LTP,
        CHNG:data8.CHNG,
        CHANGPercentage:data8.CHANGPercentage,
        VOLUME:data8.VOLUME,
        fiftyTwo_WH:data8.fiftyTwo_WH,
        fiftyTwo_WL:data8.fiftyTwo_WL,
        Date:data8.Date,
        Time:data8.Time
    }
    const DataObj9={
        SYMBOL:data9.SYMBOL,
        OPEN:data9.OPEN,
        HIGH:data9.HIGH,
        LOW:data9.LOW,
        PREVCLOSE:data9.PREVCLOSE,
        LTP:data9.LTP,
        CHNG:data9.CHNG,
        CHANGPercentage:data9.CHANGPercentage,
        VOLUME:data1.VOLUME,
        fiftyTwo_WH:data9.fiftyTwo_WH,
        fiftyTwo_WL:data9.fiftyTwo_WL,
        Date:data9.Date,
        Time:data9.Time
    }
    const DataObj10={
        SYMBOL:data10.SYMBOL,
        OPEN:data10.OPEN,
        HIGH:data10.HIGH,
        LOW:data10.LOW,
        PREVCLOSE:data10.PREVCLOSE,
        LTP:data10.LTP,
        CHNG:data10.CHNG,
        CHANGPercentage:data10.CHANGPercentage,
        VOLUME:data10.VOLUME,
        fiftyTwo_WH:data10.fiftyTwo_WH,
        fiftyTwo_WL:data10.fiftyTwo_WL,
        Date:data10.Date,
        Time:data10.Time
    }
    const DataObj11={
        SYMBOL:data11.SYMBOL,
        OPEN:data11.OPEN,
        HIGH:data11.HIGH,
        LOW:data11.LOW,
        PREVCLOSE:data11.PREVCLOSE,
        LTP:data11.LTP,
        CHNG:data11.CHNG,
        CHANGPercentage:data11.CHANGPercentage,
        VOLUME:data11.VOLUME,
        fiftyTwo_WH:data11.fiftyTwo_WH,
        fiftyTwo_WL:data11.fiftyTwo_WL,
        Date:data11.Date,
        Time:data11.Time
    }
    const DataObj12={
        SYMBOL:data12.SYMBOL,
        OPEN:data12.OPEN,
        HIGH:data12.HIGH,
        LOW:data12.LOW,
        PREVCLOSE:data12.PREVCLOSE,
        LTP:data12.LTP,
        CHNG:data12.CHNG,
        CHANGPercentage:data12.CHANGPercentage,
        VOLUME:data12.VOLUME,
        fiftyTwo_WH:data12.fiftyTwo_WH,
        fiftyTwo_WL:data12.fiftyTwo_WL,
        Date:data12.Date,
        Time:data12.Time
    }
    const DataObj13={
        SYMBOL:data13.SYMBOL,
        OPEN:data13.OPEN,
        HIGH:data13.HIGH,
        LOW:data13.LOW,
        PREVCLOSE:data13.PREVCLOSE,
        LTP:data13.LTP,
        CHNG:data13.CHNG,
        CHANGPercentage:data13.CHANGPercentage,
        VOLUME:data13.VOLUME,
        fiftyTwo_WH:data13.fiftyTwo_WH,
        fiftyTwo_WL:data13.fiftyTwo_WL,
        Date:data13.Date,
        Time:data13.Time
    }
    const DataObj14={
        SYMBOL:data14.SYMBOL,
        OPEN:data14.OPEN,
        HIGH:data14.HIGH,
        LOW:data14.LOW,
        PREVCLOSE:data14.PREVCLOSE,
        LTP:data14.LTP,
        CHNG:data14.CHNG,
        CHANGPercentage:data14.CHANGPercentage,
        VOLUME:data14.VOLUME,
        fiftyTwo_WH:data14.fiftyTwo_WH,
        fiftyTwo_WL:data14.fiftyTwo_WL,
        Date:data14.Date,
        Time:data14.Time
    }
    const DataObj15={
        SYMBOL:data15.SYMBOL,
        OPEN:data15.OPEN,
        HIGH:data15.HIGH,
        LOW:data15.LOW,
        PREVCLOSE:data15.PREVCLOSE,
        LTP:data15.LTP,
        CHNG:data15.CHNG,
        CHANGPercentage:data15.CHANGPercentage,
        VOLUME:data15.VOLUME,
        fiftyTwo_WH:data15.fiftyTwo_WH,
        fiftyTwo_WL:data15.fiftyTwo_WL,
        Date:data15.Date,
        Time:data15.Time
    }
    const DataObj16={
    SYMBOL:data16.SYMBOL,
    OPEN:data16.OPEN,
    HIGH:data16.HIGH,
    LOW:data16.LOW,
    PREVCLOSE:data16.PREVCLOSE,
    LTP:data16.LTP,
    CHNG:data16.CHNG,
    CHANGPercentage:data16.CHANGPercentage,
    VOLUME:data16.VOLUME,
    fiftyTwo_WH:data16.fiftyTwo_WH,
    fiftyTwo_WL:data16.fiftyTwo_WL,
    Date:data16.Date,
    Time:data16.Time
    }
    const DataObj17={
    SYMBOL:data17.SYMBOL,
    OPEN:data17.OPEN,
    HIGH:data17.HIGH,
    LOW:data17.LOW,
    PREVCLOSE:data17.PREVCLOSE,
    LTP:data17.LTP,
    CHNG:data17.CHNG,
    CHANGPercentage:data17.CHANGPercentage,
    VOLUME:data17.VOLUME,
    fiftyTwo_WH:data17.fiftyTwo_WH,
    fiftyTwo_WL:data17.fiftyTwo_WL,
    Date:data17.Date,
    Time:data17.Time
    }
    const DataObj18={
    SYMBOL:data18.SYMBOL,
    OPEN:data18.OPEN,
    HIGH:data18.HIGH,
    LOW:data18.LOW,
    PREVCLOSE:data18.PREVCLOSE,
    LTP:data18.LTP,
    CHNG:data18.CHNG,
    CHANGPercentage:data18.CHANGPercentage,
    VOLUME:data18.VOLUME,
    fiftyTwo_WH:data18.fiftyTwo_WH,
    fiftyTwo_WL:data18.fiftyTwo_WL,
    Date:data18.Date,
    Time:data18.Time
    }
    const DataObj19={
    SYMBOL:data19.SYMBOL,
    OPEN:data19.OPEN,
    HIGH:data19.HIGH,
    LOW:data19.LOW,
    PREVCLOSE:data19.PREVCLOSE,
    LTP:data19.LTP,
    CHNG:data19.CHNG,
    CHANGPercentage:data19.CHANGPercentage,
    VOLUME:data19.VOLUME,
    fiftyTwo_WH:data19.fiftyTwo_WH,
    fiftyTwo_WL:data6.fiftyTwo_WL,
    Date:data19.Date,
    Time:data19.Time
    }
    const DataObj20={
    SYMBOL:data20.SYMBOL,
    OPEN:data20.OPEN,
    HIGH:data20.HIGH,
    LOW:data20.LOW,
    PREVCLOSE:data20.PREVCLOSE,
    LTP:data20.LTP,
    CHNG:data20.CHNG,
    CHANGPercentage:data20.CHANGPercentage,
    VOLUME:data20.VOLUME,
    fiftyTwo_WH:data20.fiftyTwo_WH,
    fiftyTwo_WL:data20.fiftyTwo_WL,
    Date:data20.Date,
    Time:data20.Time
    }
    const DataObj21={
    SYMBOL:data21.SYMBOL,
    OPEN:data21.OPEN,
    HIGH:data21.HIGH,
    LOW:data21.LOW,
    PREVCLOSE:data21.PREVCLOSE,
    LTP:data21.LTP,
    CHNG:data21.CHNG,
    CHANGPercentage:data21.CHANGPercentage,
    VOLUME:data21.VOLUME,
    fiftyTwo_WH:data21.fiftyTwo_WH,
    fiftyTwo_WL:data21.fiftyTwo_WL,
    Date:data21.Date,
    Time:data21.Time
    }
    const DataObj22={
    SYMBOL:data22.SYMBOL,
    OPEN:data22.OPEN,
    HIGH:data22.HIGH,
    LOW:data22.LOW,
    PREVCLOSE:data22.PREVCLOSE,
    LTP:data22.LTP,
    CHNG:data22.CHNG,
    CHANGPercentage:data22.CHANGPercentage,
    VOLUME:data22.VOLUME,
    fiftyTwo_WH:data22.fiftyTwo_WH,
    fiftyTwo_WL:data22.fiftyTwo_WL,
    Date:data22.Date,
    Time:data22.Time
    }
    const DataObj23={
    SYMBOL:data23.SYMBOL,
    OPEN:data23.OPEN,
    HIGH:data23.HIGH,
    LOW:data23.LOW,
    PREVCLOSE:data23.PREVCLOSE,
    LTP:data23.LTP,
    CHNG:data23.CHNG,
    CHANGPercentage:data23.CHANGPercentage,
    VOLUME:data23.VOLUME,
    fiftyTwo_WH:data23.fiftyTwo_WH,
    fiftyTwo_WL:data23.fiftyTwo_WL,
    Date:data23.Date,
    Time:data23.Time
    }
    const DataObj24={
    SYMBOL:data24.SYMBOL,
    OPEN:data24.OPEN,
    HIGH:data24.HIGH,
    LOW:data24.LOW,
    PREVCLOSE:data24.PREVCLOSE,
    LTP:data24.LTP,
    CHNG:data24.CHNG,
    CHANGPercentage:data24.CHANGPercentage,
    VOLUME:data24.VOLUME,
    fiftyTwo_WH:data24.fiftyTwo_WH,
    fiftyTwo_WL:data24.fiftyTwo_WL,
    Date:data24.Date,
    Time:data24.Time
    }
    const DataObj25={
    SYMBOL:data25.SYMBOL,
    OPEN:data25.OPEN,
    HIGH:data25.HIGH,
    LOW:data25.LOW,
    PREVCLOSE:data25.PREVCLOSE,
    LTP:data25.LTP,
    CHNG:data25.CHNG,
    CHANGPercentage:data25.CHANGPercentage,
    VOLUME:data25.VOLUME,
    fiftyTwo_WH:data25.fiftyTwo_WH,
    fiftyTwo_WL:data25.fiftyTwo_WL,
    Date:data25.Date,
    Time:data25.Time
    }
    const DataObj26={
    SYMBOL:data26.SYMBOL,
    OPEN:data26.OPEN,
    HIGH:data26.HIGH,
    LOW:data26.LOW,
    PREVCLOSE:data26.PREVCLOSE,
    LTP:data26.LTP,
    CHNG:data26.CHNG,
    CHANGPercentage:data26.CHANGPercentage,
    VOLUME:data26.VOLUME,
    fiftyTwo_WH:data26.fiftyTwo_WH,
    fiftyTwo_WL:data26.fiftyTwo_WL,
    Date:data26.Date,
    Time:data26.Time
    }
    const DataObj27={
    SYMBOL:data27.SYMBOL,
    OPEN:data27.OPEN,
    HIGH:data27.HIGH,
    LOW:data27.LOW,
    PREVCLOSE:data27.PREVCLOSE,
    LTP:data27.LTP,
    CHNG:data27.CHNG,
    CHANGPercentage:data27.CHANGPercentage,
    VOLUME:data27.VOLUME,
    fiftyTwo_WH:data27.fiftyTwo_WH,
    fiftyTwo_WL:data27.fiftyTwo_WL,
    Date:data27.Date,
    Time:data27.Time
    }
    const DataObj28={
    SYMBOL:data28.SYMBOL,
    OPEN:data28.OPEN,
    HIGH:data28.HIGH,
    LOW:data28.LOW,
    PREVCLOSE:data28.PREVCLOSE,
    LTP:data28.LTP,
    CHNG:data28.CHNG,
    CHANGPercentage:data28.CHANGPercentage,
    VOLUME:data28.VOLUME,
    fiftyTwo_WH:data28.fiftyTwo_WH,
    fiftyTwo_WL:data28.fiftyTwo_WL,
    Date:data28.Date,
    Time:data28.Time
    }
    const DataObj29={
    SYMBOL:data29.SYMBOL,
    OPEN:data29.OPEN,
    HIGH:data29.HIGH,
    LOW:data29.LOW,
    PREVCLOSE:data29.PREVCLOSE,
    LTP:data29.LTP,
    CHNG:data29.CHNG,
    CHANGPercentage:data29.CHANGPercentage,
    VOLUME:data29.VOLUME,
    fiftyTwo_WH:data29.fiftyTwo_WH,
    fiftyTwo_WL:data29.fiftyTwo_WL,
    Date:data29.Date,
    Time:data29.Time
    }  
    const DataObj30={
    SYMBOL:data30.SYMBOL,
    OPEN:data30.OPEN,
    HIGH:data30.HIGH,
    LOW:data30.LOW,
    PREVCLOSE:data30.PREVCLOSE,
    LTP:data30.LTP,
    CHNG:data30.CHNG,
    CHANGPercentage:data30.CHANGPercentage,
    VOLUME:data30.VOLUME,
    fiftyTwo_WH:data30.fiftyTwo_WH,
    fiftyTwo_WL:data30.fiftyTwo_WL,
    Date:data30.Date,
    Time:data30.Time
    } 
    const DataObj31={
    SYMBOL:data31.SYMBOL,
    OPEN:data31.OPEN,
    HIGH:data31.HIGH,
    LOW:data31.LOW,
    PREVCLOSE:data31.PREVCLOSE,
    LTP:data31.LTP,
    CHNG:data31.CHNG,
    CHANGPercentage:data31.CHANGPercentage,
    VOLUME:data31.VOLUME,
    fiftyTwo_WH:data31.fiftyTwo_WH,
    fiftyTwo_WL:data31.fiftyTwo_WL,
    Date:data31.Date,
    Time:data31.Time
    }
    const DataObj32={
    SYMBOL:data32.SYMBOL,
    OPEN:data32.OPEN,
    HIGH:data32.HIGH,
    LOW:data32.LOW,
    PREVCLOSE:data32.PREVCLOSE,
    LTP:data32.LTP,
    CHNG:data32.CHNG,
    CHANGPercentage:data32.CHANGPercentage,
    VOLUME:data32.VOLUME,
    fiftyTwo_WH:data32.fiftyTwo_WH,
    fiftyTwo_WL:data32.fiftyTwo_WL,
    Date:data32.Date,
    Time:data32.Time
    }
    const DataObj33={
    SYMBOL:data33.SYMBOL,
    OPEN:data33.OPEN,
    HIGH:data33.HIGH,
    LOW:data33.LOW,
    PREVCLOSE:data33.PREVCLOSE,
    LTP:data33.LTP,
    CHNG:data33.CHNG,
    CHANGPercentage:data33.CHANGPercentage,
    VOLUME:data33.VOLUME,
    fiftyTwo_WH:data33.fiftyTwo_WH,
    fiftyTwo_WL:data33.fiftyTwo_WL,
    Date:data33.Date,
    Time:data33.Time
    }
    const DataObj34={
    SYMBOL:data34.SYMBOL,
    OPEN:data34.OPEN,
    HIGH:data34.HIGH,
    LOW:data34.LOW,
    PREVCLOSE:data34.PREVCLOSE,
    LTP:data34.LTP,
    CHNG:data34.CHNG,
    CHANGPercentage:data34.CHANGPercentage,
    VOLUME:data34.VOLUME,
    fiftyTwo_WH:data34.fiftyTwo_WH,
    fiftyTwo_WL:data34.fiftyTwo_WL,
    Date:data34.Date,
    Time:data34.Time
    }
    const DataObj35={
    SYMBOL:data35.SYMBOL,
    OPEN:data35.OPEN,
    HIGH:data35.HIGH,
    LOW:data35.LOW,
    PREVCLOSE:data35.PREVCLOSE,
    LTP:data35.LTP,
    CHNG:data35.CHNG,
    CHANGPercentage:data35.CHANGPercentage,
    VOLUME:data35.VOLUME,
    fiftyTwo_WH:data35.fiftyTwo_WH,
    fiftyTwo_WL:data35.fiftyTwo_WL,
    Date:data35.Date,
    Time:data35.Time
    }
    const DataObj36={
    SYMBOL:data36.SYMBOL,
    OPEN:data36.OPEN,
    HIGH:data36.HIGH,
    LOW:data36.LOW,
    PREVCLOSE:data36.PREVCLOSE,
    LTP:data36.LTP,
    CHNG:data36.CHNG,
    CHANGPercentage:data36.CHANGPercentage,
    VOLUME:data36.VOLUME,
    fiftyTwo_WH:data36.fiftyTwo_WH,
    fiftyTwo_WL:data36.fiftyTwo_WL,
    Date:data36.Date,
    Time:data36.Time
    }
    const DataObj37={
    SYMBOL:data37.SYMBOL,
    OPEN:data37.OPEN,
    HIGH:data37.HIGH,
    LOW:data37.LOW,
    PREVCLOSE:data37.PREVCLOSE,
    LTP:data37.LTP,
    CHNG:data37.CHNG,
    CHANGPercentage:data37.CHANGPercentage,
    VOLUME:data37.VOLUME,
    fiftyTwo_WH:data37.fiftyTwo_WH,
    fiftyTwo_WL:data37.fiftyTwo_WL,
    Date:data37.Date,
    Time:data37.Time
    }
    const DataObj38={
    SYMBOL:data38.SYMBOL,
    OPEN:data38.OPEN,
    HIGH:data38.HIGH,
    LOW:data38.LOW,
    PREVCLOSE:data38.PREVCLOSE,
    LTP:data38.LTP,
    CHNG:data38.CHNG,
    CHANGPercentage:data38.CHANGPercentage,
    VOLUME:data38.VOLUME,
    fiftyTwo_WH:data38.fiftyTwo_WH,
    fiftyTwo_WL:data38.fiftyTwo_WL,
    Date:data38.Date,
    Time:data38.Time
    }
    const DataObj39={
    SYMBOL:data39.SYMBOL,
    OPEN:data39.OPEN,
    HIGH:data39.HIGH,
    LOW:data39.LOW,
    PREVCLOSE:data39.PREVCLOSE,
    LTP:data39.LTP,
    CHNG:data39.CHNG,
    CHANGPercentage:data39.CHANGPercentage,
    VOLUME:data39.VOLUME,
    fiftyTwo_WH:data39.fiftyTwo_WH,
    fiftyTwo_WL:data39.fiftyTwo_WL,
    Date:data39.Date,
    Time:data39.Time
    }  
    const DataObj40={
    SYMBOL:data40.SYMBOL,
    OPEN:data40.OPEN,
    HIGH:data40.HIGH,
    LOW:data40.LOW,
    PREVCLOSE:data40.PREVCLOSE,
    LTP:data40.LTP,
    CHNG:data40.CHNG,
    CHANGPercentage:data40.CHANGPercentage,
    VOLUME:data40.VOLUME,
    fiftyTwo_WH:data40.fiftyTwo_WH,
    fiftyTwo_WL:data40.fiftyTwo_WL,
    Date:data40.Date,
    Time:data40.Time
    } 
    const DataObj41={
    SYMBOL:data41.SYMBOL,
    OPEN:data41.OPEN,
    HIGH:data41.HIGH,
    LOW:data41.LOW,
    PREVCLOSE:data41.PREVCLOSE,
    LTP:data41.LTP,
    CHNG:data41.CHNG,
    CHANGPercentage:data41.CHANGPercentage,
    VOLUME:data41.VOLUME,
    fiftyTwo_WH:data41.fiftyTwo_WH,
    fiftyTwo_WL:data41.fiftyTwo_WL,
    Date:data41.Date,
    Time:data41.Time
    }
    const DataObj42={
    SYMBOL:data42.SYMBOL,
    OPEN:data42.OPEN,
    HIGH:data42.HIGH,
    LOW:data42.LOW,
    PREVCLOSE:data42.PREVCLOSE,
    LTP:data42.LTP,
    CHNG:data42.CHNG,
    CHANGPercentage:data42.CHANGPercentage,
    VOLUME:data42.VOLUME,
    VALUE:data42.VALUE,
    fiftyTwo_WH:data42.fiftyTwo_WH,
    fiftyTwo_WL:data42.fiftyTwo_WL,
    Date:data42.Date,
    Time:data42.Time
    }
    const DataObj43={
    SYMBOL:data43.SYMBOL,
    OPEN:data43.OPEN,
    HIGH:data43.HIGH,
    LOW:data43.LOW,
    PREVCLOSE:data43.PREVCLOSE,
    LTP:data43.LTP,
    CHNG:data43.CHNG,
    CHANGPercentage:data43.CHANGPercentage,
    VOLUME:data43.VOLUME,
    fiftyTwo_WH:data43.fiftyTwo_WH,
    fiftyTwo_WL:data43.fiftyTwo_WL,
    Date:data43.Date,
    Time:data43.Time
    }
    const DataObj44={
    SYMBOL:data44.SYMBOL,
    OPEN:data44.OPEN,
    HIGH:data44.HIGH,
    LOW:data44.LOW,
    PREVCLOSE:data44.PREVCLOSE,
    LTP:data44.LTP,
    CHNG:data44.CHNG,
    CHANGPercentage:data44.CHANGPercentage,
    VOLUME:data44.VOLUME,
    fiftyTwo_WH:data44.fiftyTwo_WH,
    fiftyTwo_WL:data44.fiftyTwo_WL,
    Date:data44.Date,
    Time:data44.Time
    }
    const DataObj45={
    SYMBOL:data45.SYMBOL,
    OPEN:data45.OPEN,
    HIGH:data45.HIGH,
    LOW:data45.LOW,
    PREVCLOSE:data45.PREVCLOSE,
    LTP:data45.LTP,
    CHNG:data45.CHNG,
    CHANGPercentage:data45.CHANGPercentage,
    VOLUME:data45.VOLUME,
    fiftyTwo_WH:data45.fiftyTwo_WH,
    fiftyTwo_WL:data45.fiftyTwo_WL,
    Date:data45.Date,
    Time:data45.Time
    }
    const DataObj46={
    SYMBOL:data46.SYMBOL,
    OPEN:data46.OPEN,
    HIGH:data46.HIGH,
    LOW:data46.LOW,
    PREVCLOSE:data46.PREVCLOSE,
    LTP:data46.LTP,
    CHNG:data46.CHNG,
    CHANGPercentage:data46.CHANGPercentage,
    VOLUME:data46.VOLUME,
    fiftyTwo_WH:data46.fiftyTwo_WH,
    fiftyTwo_WL:data46.fiftyTwo_WL,
    Date:data46.Date,
    Time:data46.Time
    }
    const DataObj47={
    SYMBOL:data47.SYMBOL,
    OPEN:data47.OPEN,
    HIGH:data47.HIGH,
    LOW:data47.LOW,
    PREVCLOSE:data47.PREVCLOSE,
    LTP:data47.LTP,
    CHNG:data47.CHNG,
    CHANGPercentage:data47.CHANGPercentage,
    VOLUME:data47.VOLUME,
    fiftyTwo_WH:data47.fiftyTwo_WH,
    fiftyTwo_WL:data47.fiftyTwo_WL,
    Date:data47.Date,
    Time:data47.Time
    }
    const DataObj48={
    SYMBOL:data48.SYMBOL,
    OPEN:data48.OPEN,
    HIGH:data48.HIGH,
    LOW:data48.LOW,
    PREVCLOSE:data48.PREVCLOSE,
    LTP:data48.LTP,
    CHNG:data48.CHNG,
    CHANGPercentage:data48.CHANGPercentage,
    VOLUME:data48.VOLUME,
    fiftyTwo_WH:data48.fiftyTwo_WH,
    fiftyTwo_WL:data48.fiftyTwo_WL,
    Date:data48.Date,
    Time:data48.Time
    }
    const DataObj49={
    SYMBOL:data49.SYMBOL,
    OPEN:data49.OPEN,
    HIGH:data49.HIGH,
    LOW:data49.LOW,
    PREVCLOSE:data49.PREVCLOSE,
    LTP:data49.LTP,
    CHNG:data49.CHNG,
    CHANGPercentage:data49.CHANGPercentage,
    VOLUME:data49.VOLUME,
    fiftyTwo_WH:data49.fiftyTwo_WH,
    fiftyTwo_WL:data49.fiftyTwo_WL,
    Date:data49.Date,
    Time:data9.Time
    }  
    const DataObj50={
        SYMBOL:data50.SYMBOL,
        OPEN:data50.OPEN,
        HIGH:data50.HIGH,
        LOW:data50.LOW,
        PREVCLOSE:data50.PREVCLOSE,
        LTP:data50.LTP,
        CHNG:data50.CHNG,
        CHANGPercentage:data50.CHANGPercentage,
        VOLUME:data50.VOLUME,
        fiftyTwo_WH:data50.fiftyTwo_WH,
        fiftyTwo_WL:data50.fiftyTwo_WL,
        Date:data50.Date,
        Time:data50.Time
    }


try {
    // console.log(nifty50DataObj);
const savedData =await Data.insertMany([
        nifty50DataObj,
        DataObj1,DataObj2,DataObj3,DataObj4,DataObj5,DataObj6,DataObj7,DataObj8,DataObj9,DataObj10,
        data11,DataObj12,DataObj13,DataObj14,DataObj15,DataObj16,DataObj17,DataObj18,DataObj19,DataObj20,
        DataObj21,DataObj22,DataObj23,DataObj24,DataObj25,DataObj26,DataObj27,DataObj28,DataObj29,DataObj30,
        DataObj31,DataObj32,DataObj33,DataObj34,DataObj35,DataObj36,DataObj37,DataObj38,DataObj39,DataObj40,
        DataObj41,DataObj42,DataObj43,DataObj44,DataObj45,DataObj46,DataObj47,DataObj48,DataObj49,DataObj50,
        
    ]);
    res.status(201).send(savedData);
}catch(err){
    console.log("Something went wrong while saving to DB",err);
    res.status(500).send({message:err.message,status: `ERROR`});
}
}

async function getAdminSpecificData(req,res){
    try{
        const data = await Data.find({
            Date:req.headers.date,
            Time:req.headers.time
        })
        if(!data[0]){
            return res.status(404).send({message:`Stock data is not found for  given Time stamp please wait we are collecting data`})
        }
        covert(data);
        res.status(200).json({message:`Sheet updated successfully with Date: ${req.headers.date} & Time: ${req.headers.time}`})
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
} 
async function getScrapData(req,res){
    try{
        console.log("t>>>",req.headers.time)
        const stocksData = await Data.find({
            Date:req.headers.date,
            Time:req.headers.time
        })
        if(!stocksData[0]){
            return res.status(404).send({message:`Stock data is not found for "Sheet2" with given Time please wait we are collecting data`})
        }
        res.status(200).json(stocksData)
    }catch(error){
        console.log()
        res.status(500).json({message:error.message,status:`ERROR`})
    }

}  

async function getScrapData20(req,res){
    try{
        console.log("t2>>>",req.headers.time1)
        const stocksData = await Data.find({
            Date:req.headers.date,
            Time:req.headers.time1
        })
        if(!stocksData[0]){
            return res.status(404).send({message:`Stock data is not found for "Sheet3" with given Time please wait we are collecting data`})
        }
        res.status(200).send(stocksData)
    }catch(error){
        res.status(500).json({message:error.message,status:`ERROR`})
    }
}  

async function getAllSTocksData(req,res){
    try{
    const pageNumber = req.query.page || 1; // Get the current page number from the query parameters
    const pageSize = 20; // Number of items per page
    
    Data.paginate({}, { page: pageNumber, limit: pageSize }, (err, result) => {
    if (err) {
        return res.status(500).json({ message: 'Error occurred while fetching Data.' });
    }
    
    const { docs, total, limit, page, pages } = result;
    res.json({ users: docs, total, limit, page, pages });
    });}catch(error){
            res.status(500).json({message:error.message,status:`ERROR`})
            }
}


function covert(data){
    resData =data[0].SYMBOL
    let GetStock = []
    GetStock.push([data[0].SYMBOL,data[0].OPEN,data[0].HIGH,data[0].LOW,data[0].PREVCLOSE,data[0].LTP,data[0].CHNG,data[0].CHANGPercentage,data[0].VOLUME,data[0].fiftyTwo_WH,data[0].fiftyTwo_WL,data[0].Date,data[0].Time]);
    GetStock.push([data[1].SYMBOL,data[1].OPEN,data[1].HIGH,data[1].LOW,data[1].PREVCLOSE,data[1].LTP,data[1].CHNG,data[1].CHANGPercentage,data[1].VOLUME,data[1].fiftyTwo_WH,data[1].fiftyTwo_WL,data[1].Date,data[1].Time]);
    GetStock.push([data[2].SYMBOL,data[2].OPEN,data[2].HIGH,data[2].LOW,data[2].PREVCLOSE,data[2].LTP,data[2].CHNG,data[2].CHANGPercentage,data[2].VOLUME,data[2].fiftyTwo_WH,data[2].fiftyTwo_WL,data[2].Date,data[2].Time]);
    GetStock.push([data[3].SYMBOL,data[3].OPEN,data[3].HIGH,data[3].LOW,data[2].PREVCLOSE,data[3].LTP,data[3].CHNG,data[3].CHANGPercentage,data[3].VOLUME,data[3].fiftyTwo_WH,data[3].fiftyTwo_WL,data[3].Date,data[3].Time]);
    GetStock.push([data[4].SYMBOL,data[4].OPEN,data[4].HIGH,data[4].LOW,data[4].PREVCLOSE,data[4].LTP,data[4].CHNG,data[4].CHANGPercentage,data[4].VOLUME,data[4].fiftyTwo_WH,data[4].fiftyTwo_WL,data[4].Date,data[4].Time]);
    GetStock.push([data[5].SYMBOL,data[4].OPEN,data[5].HIGH,data[5].LOW,data[5].PREVCLOSE,data[5].LTP,data[5].CHNG,data[5].CHANGPercentage,data[5].VOLUME,data[5].fiftyTwo_WH,data[5].fiftyTwo_WL,data[5].Date,data[5].Time]);
    GetStock.push([data[6].SYMBOL,data[6].OPEN,data[6].HIGH,data[6].LOW,data[6].PREVCLOSE,data[6].LTP,data[6].CHNG,data[6].CHANGPercentage,data[6].VOLUME,data[6].fiftyTwo_WH,data[6].fiftyTwo_WL,data[6].Date,data[6].Time]);
    GetStock.push([data[7].SYMBOL,data[7].OPEN,data[7].HIGH,data[7].LOW,data[7].PREVCLOSE,data[7].LTP,data[7].CHNG,data[7].CHANGPercentage,data[7].VOLUME,data[7].fiftyTwo_WH,data[7].fiftyTwo_WL,data[7].Date,data[7].Time]);
    GetStock.push([data[8].SYMBOL,data[8].OPEN,data[8].HIGH,data[8].LOW,data[8].PREVCLOSE,data[8].LTP,data[8].CHNG,data[8].CHANGPercentage,data[8].VOLUME,data[8].fiftyTwo_WH,data[8].fiftyTwo_WL,data[8].Date,data[8].Time]);
    GetStock.push([data[9].SYMBOL,data[9].OPEN,data[9].HIGH,data[9].LOW,data[9].PREVCLOSE,data[9].LTP,data[9].CHNG,data[9].CHANGPercentage,data[9].VOLUME,data[9].fiftyTwo_WH,data[9].fiftyTwo_WL,data[9].Date,data[9].Time]);
    GetStock.push([data[10].SYMBOL,data[10].OPEN,data[10].HIGH,data[10].LOW,data[10].PREVCLOSE,data[10].LTP,data[10].CHNG,data[10].CHANGPercentage,data[10].VOLUME,data[10].fiftyTwo_WH,data[10].fiftyTwo_WL,data[10].Date,data[10].Time]);
    GetStock.push([data[11].SYMBOL,data[11].OPEN,data[11].HIGH,data[11].LOW,data[11].PREVCLOSE,data[11].LTP,data[11].CHNG,data[11].CHANGPercentage,data[11].VOLUME,data[11].fiftyTwo_WH,data[11].fiftyTwo_WL,data[11].Date,data[11].Time]);
    GetStock.push([data[12].SYMBOL,data[12].OPEN,data[12].HIGH,data[12].LOW,data[12].PREVCLOSE,data[12].LTP,data[12].CHNG,data[12].CHANGPercentage,data[12].VOLUME,data[12].fiftyTwo_WH,data[12].fiftyTwo_WL,data[12].Date,data[12].Time]);
    GetStock.push([data[13].SYMBOL,data[13].OPEN,data[13].HIGH,data[13].LOW,data[13].PREVCLOSE,data[13].LTP,data[13].CHNG,data[13].CHANGPercentage,data[13].VOLUME,data[13].fiftyTwo_WH,data[13].fiftyTwo_WL,data[13].Date,data[13].Time]);
    GetStock.push([data[14].SYMBOL,data[14].OPEN,data[14].HIGH,data[14].LOW,data[14].PREVCLOSE,data[14].LTP,data[14].CHNG,data[14].CHANGPercentage,data[14].VOLUME,data[14].fiftyTwo_WH,data[14].fiftyTwo_WL,data[14].Date,data[14].Time]);
    GetStock.push([data[15].SYMBOL,data[15].OPEN,data[15].HIGH,data[15].LOW,data[15].PREVCLOSE,data[15].LTP,data[15].CHNG,data[15].CHANGPercentage,data[15].VOLUME,data[15].fiftyTwo_WH,data[15].fiftyTwo_WL,data[15].Date,data[15].Time]);
    GetStock.push([data[16].SYMBOL,data[16].OPEN,data[16].HIGH,data[16].LOW,data[16].PREVCLOSE,data[16].LTP,data[16].CHNG,data[16].CHANGPercentage,data[16].VOLUME,data[16].fiftyTwo_WH,data[16].fiftyTwo_WL,data[16].Date,data[16].Time]);
    GetStock.push([data[17].SYMBOL,data[17].OPEN,data[17].HIGH,data[17].LOW,data[17].PREVCLOSE,data[17].LTP,data[17].CHNG,data[17].CHANGPercentage,data[17].VOLUME,data[17].fiftyTwo_WH,data[17].fiftyTwo_WL,data[17].Date,data[17].Time]);
    GetStock.push([data[18].SYMBOL,data[18].OPEN,data[18].HIGH,data[18].LOW,data[18].PREVCLOSE,data[18].LTP,data[18].CHNG,data[18].CHANGPercentage,data[18].VOLUME,data[18].fiftyTwo_WH,data[18].fiftyTwo_WL,data[18].Date,data[18].Time]);
    GetStock.push([data[19].SYMBOL,data[19].OPEN,data[19].HIGH,data[19].LOW,data[19].PREVCLOSE,data[19].LTP,data[19].CHNG,data[19].CHANGPercentage,data[19].VOLUME,data[19].fiftyTwo_WH,data[19].fiftyTwo_WL,data[19].Date,data[19].Time]);
    GetStock.push([data[20].SYMBOL,data[20].OPEN,data[20].HIGH,data[20].LOW,data[20].PREVCLOSE,data[20].LTP,data[20].CHNG,data[20].CHANGPercentage,data[20].VOLUME,data[20].fiftyTwo_WH,data[20].fiftyTwo_WL,data[20].Date,data[20].Time]);
    GetStock.push([data[21].SYMBOL,data[21].OPEN,data[21].HIGH,data[21].LOW,data[21].PREVCLOSE,data[21].LTP,data[21].CHNG,data[21].CHANGPercentage,data[21].VOLUME,data[21].fiftyTwo_WH,data[21].fiftyTwo_WL,data[21].Date,data[21].Time]);
    GetStock.push([data[22].SYMBOL,data[22].OPEN,data[22].HIGH,data[22].LOW,data[22].PREVCLOSE,data[22].LTP,data[22].CHNG,data[22].CHANGPercentage,data[22].VOLUME,data[22].fiftyTwo_WH,data[22].fiftyTwo_WL,data[22].Date,data[22].Time]);
    GetStock.push([data[23].SYMBOL,data[23].OPEN,data[23].HIGH,data[23].LOW,data[23].PREVCLOSE,data[23].LTP,data[23].CHNG,data[23].CHANGPercentage,data[23].VOLUME,data[23].fiftyTwo_WH,data[23].fiftyTwo_WL,data[23].Date,data[23].Time]);
    GetStock.push([data[24].SYMBOL,data[24].OPEN,data[24].HIGH,data[24].LOW,data[24].PREVCLOSE,data[24].LTP,data[24].CHNG,data[24].CHANGPercentage,data[24].VOLUME,data[24].fiftyTwo_WH,data[24].fiftyTwo_WL,data[24].Date,data[24].Time]);
    GetStock.push([data[25].SYMBOL,data[25].OPEN,data[25].HIGH,data[25].LOW,data[25].PREVCLOSE,data[25].LTP,data[25].CHNG,data[25].CHANGPercentage,data[25].VOLUME,data[25].fiftyTwo_WH,data[25].fiftyTwo_WL,data[25].Date,data[25].Time]);
    GetStock.push([data[26].SYMBOL,data[26].OPEN,data[26].HIGH,data[26].LOW,data[26].PREVCLOSE,data[26].LTP,data[26].CHNG,data[26].CHANGPercentage,data[26].VOLUME,data[26].fiftyTwo_WH,data[26].fiftyTwo_WL,data[26].Date,data[26].Time]);
    GetStock.push([data[27].SYMBOL,data[27].OPEN,data[27].HIGH,data[27].LOW,data[27].PREVCLOSE,data[27].LTP,data[27].CHNG,data[27].CHANGPercentage,data[27].VOLUME,data[27].fiftyTwo_WH,data[27].fiftyTwo_WL,data[27].Date,data[27].Time]);
    GetStock.push([data[28].SYMBOL,data[28].OPEN,data[28].HIGH,data[28].LOW,data[28].PREVCLOSE,data[27].LTP,data[28].CHNG,data[28].CHANGPercentage,data[28].VOLUME,data[28].fiftyTwo_WH,data[28].fiftyTwo_WL,data[28].Date,data[28].Time]);
    GetStock.push([data[29].SYMBOL,data[29].OPEN,data[29].HIGH,data[29].LOW,data[29].PREVCLOSE,data[29].LTP,data[29].CHNG,data[29].CHANGPercentage,data[29].VOLUME,data[29].fiftyTwo_WH,data[29].fiftyTwo_WL,data[29].Date,data[29].Time]);
    GetStock.push([data[30].SYMBOL,data[30].OPEN,data[30].HIGH,data[30].LOW,data[30].PREVCLOSE,data[30].LTP,data[30].CHNG,data[30].CHANGPercentage,data[30].VOLUME,data[30].fiftyTwo_WH,data[30].fiftyTwo_WL,data[30].Date,data[30].Time]);
    GetStock.push([data[31].SYMBOL,data[31].OPEN,data[31].HIGH,data[31].LOW,data[31].PREVCLOSE,data[31].LTP,data[31].CHNG,data[31].CHANGPercentage,data[31].VOLUME,data[31].fiftyTwo_WH,data[31].fiftyTwo_WL,data[31].Date,data[31].Time]);
    GetStock.push([data[32].SYMBOL,data[32].OPEN,data[32].HIGH,data[32].LOW,data[32].PREVCLOSE,data[32].LTP,data[32].CHNG,data[32].CHANGPercentage,data[32].VOLUME,data[32].fiftyTwo_WH,data[32].fiftyTwo_WL,data[32].Date,data[32].Time]);
    GetStock.push([data[33].SYMBOL,data[33].OPEN,data[33].HIGH,data[33].LOW,data[33].PREVCLOSE,data[33].LTP,data[33].CHNG,data[33].CHANGPercentage,data[33].VOLUME,data[33].fiftyTwo_WH,data[33].fiftyTwo_WL,data[33].Date,data[33].Time]);
    GetStock.push([data[34].SYMBOL,data[34].OPEN,data[34].HIGH,data[34].LOW,data[34].PREVCLOSE,data[34].LTP,data[34].CHNG,data[34].CHANGPercentage,data[34].VOLUME,data[34].fiftyTwo_WH,data[34].fiftyTwo_WL,data[34].Date,data[34].Time]);
    GetStock.push([data[35].SYMBOL,data[35].OPEN,data[35].HIGH,data[35].LOW,data[35].PREVCLOSE,data[35].LTP,data[35].CHNG,data[35].CHANGPercentage,data[35].VOLUME,data[35].fiftyTwo_WH,data[35].fiftyTwo_WL,data[35].Date,data[35].Time]);
    GetStock.push([data[36].SYMBOL,data[36].OPEN,data[36].HIGH,data[36].LOW,data[36].PREVCLOSE,data[36].LTP,data[36].CHNG,data[36].CHANGPercentage,data[36].VOLUME,data[36].fiftyTwo_WH,data[36].fiftyTwo_WL,data[36].Date,data[36].Time]);
    GetStock.push([data[37].SYMBOL,data[37].OPEN,data[37].HIGH,data[37].LOW,data[37].PREVCLOSE,data[37].LTP,data[37].CHNG,data[37].CHANGPercentage,data[37].VOLUME,data[37].fiftyTwo_WH,data[37].fiftyTwo_WL,data[37].Date,data[37].Time]);
    GetStock.push([data[38].SYMBOL,data[38].OPEN,data[38].HIGH,data[38].LOW,data[38].PREVCLOSE,data[38].LTP,data[38].CHNG,data[38].CHANGPercentage,data[38].VOLUME,data[38].fiftyTwo_WH,data[38].fiftyTwo_WL,data[38].Date,data[38].Time]);
    GetStock.push([data[39].SYMBOL,data[39].OPEN,data[39].HIGH,data[39].LOW,data[39].PREVCLOSE,data[39].LTP,data[49].CHNG,data[49].CHANGPercentage,data[49].VOLUME,data[49].fiftyTwo_WH,data[49].fiftyTwo_WL,data[49].Date,data[49].Time]);
    GetStock.push([data[40].SYMBOL,data[40].OPEN,data[40].HIGH,data[40].LOW,data[40].PREVCLOSE,data[40].LTP,data[40].CHNG,data[40].CHANGPercentage,data[40].VOLUME,data[40].fiftyTwo_WH,data[40].fiftyTwo_WL,data[40].Date,data[40].Time]);
    GetStock.push([data[41].SYMBOL,data[41].OPEN,data[41].HIGH,data[41].LOW,data[41].PREVCLOSE,data[41].LTP,data[41].CHNG,data[41].CHANGPercentage,data[41].VOLUME,data[41].fiftyTwo_WH,data[41].fiftyTwo_WL,data[41].Date,data[41].Time]);
    GetStock.push([data[42].SYMBOL,data[42].OPEN,data[42].HIGH,data[42].LOW,data[42].PREVCLOSE,data[42].LTP,data[42].CHNG,data[42].CHANGPercentage,data[42].VOLUME,data[42].fiftyTwo_WH,data[42].fiftyTwo_WL,data[42].Date,data[42].Time]);
    GetStock.push([data[43].SYMBOL,data[43].OPEN,data[43].HIGH,data[43].LOW,data[43].PREVCLOSE,data[43].LTP,data[43].CHNG,data[43].CHANGPercentage,data[43].VOLUME,data[43].fiftyTwo_WH,data[43].fiftyTwo_WL,data[43].Date,data[43].Time]);
    GetStock.push([data[44].SYMBOL,data[44].OPEN,data[44].HIGH,data[44].LOW,data[44].PREVCLOSE,data[44].LTP,data[44].CHNG,data[44].CHANGPercentage,data[44].VOLUME,data[44].fiftyTwo_WH,data[44].fiftyTwo_WL,data[44].Date,data[44].Time]);
    GetStock.push([data[45].SYMBOL,data[45].OPEN,data[45].HIGH,data[45].LOW,data[45].PREVCLOSE,data[45].LTP,data[45].CHNG,data[45].CHANGPercentage,data[45].VOLUME,data[45].fiftyTwo_WH,data[45].fiftyTwo_WL,data[45].Date,data[45].Time]);
    GetStock.push([data[46].SYMBOL,data[46].OPEN,data[46].HIGH,data[46].LOW,data[46].PREVCLOSE,data[46].LTP,data[46].CHNG,data[46].CHANGPercentage,data[46].VOLUME,data[46].fiftyTwo_WH,data[46].fiftyTwo_WL,data[46].Date,data[46].Time]);
    GetStock.push([data[47].SYMBOL,data[47].OPEN,data[47].HIGH,data[47].LOW,data[47].PREVCLOSE,data[47].LTP,data[47].CHNG,data[47].CHANGPercentage,data[47].VOLUME,data[47].fiftyTwo_WH,data[47].fiftyTwo_WL,data[47].Date,data[47].Time]);
    GetStock.push([data[48].SYMBOL,data[48].OPEN,data[48].HIGH,data[48].LOW,data[48].PREVCLOSE,data[48].LTP,data[48].CHNG,data[48].CHANGPercentage,data[48].VOLUME,data[48].fiftyTwo_WH,data[48].fiftyTwo_WL,data[48].Date,data[48].Time]);
    GetStock.push([data[49].SYMBOL,data[49].OPEN,data[49].HIGH,data[49].LOW,data[49].PREVCLOSE,data[49].LTP,data[49].CHNG,data[49].CHANGPercentage,data[49].VOLUME,data[49].fiftyTwo_WH,data[49].fiftyTwo_WL,data[49].Date,data[49].Time]);
    GetStock.push([data[50].SYMBOL,data[50].OPEN,data[50].HIGH,data[50].LOW,data[50].PREVCLOSE,data[50].LTP,data[50].CHNG,data[50].CHANGPercentage,data[50].VOLUME,data[50].fiftyTwo_WH,data[50].fiftyTwo_WL,data[50].Date,data[50].Time]);

    console.log("1085: Data converted >>>")
            gsRun4(client,GetStock)
} 
async function gsRun4(client,GetStock){
    try{
        const gsApi = google.sheets({version:'v4',auth:client});
        const updateOption1= {
            spreadsheetId:'1iA8gKAehpYPaI8XMb5PhE6dFs0HTxNohZQHizScRk84', // spreadsheetId
            range: 'Data4!A2',
            valueInputOption:'USER_ENTERED',
            resource: {values:GetStock}
        };
    
        let res1 = await gsApi.spreadsheets.values.update(updateOption1); // post
        console.log("1102: >>>> Sheet 3 updated",res1.status);
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}
module.exports={getScrapData,getScrapData20,scrapData,getAllSTocksData,getAdminSpecificData}
// [{$match : {Date:req.params.date}}]