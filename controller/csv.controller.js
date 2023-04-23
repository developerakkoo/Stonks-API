const Data = require('../model/scraperData.model')
const moment= require ('moment')
const momentTime= moment()
async function scrapData(req,res){
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
        VALUE:data1.VALUE,
        fiftyTwo_WH:data1.fiftyTwo_WH,
        fiftyTwo_WL:data1.fiftyTwo_WL,
        TODAY:data1.TODAY,
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
        VALUE:data2.VALUE,
        fiftyTwo_WH:data2.fiftyTwo_WH,
        fiftyTwo_WL:data2.fiftyTwo_WL,
        TODAY:data2.TODAY,
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
        VALUE:data3.VALUE,
        fiftyTwo_WH:data3.fiftyTwo_WH,
        fiftyTwo_WL:data3.fiftyTwo_WL,
        TODAY:data3.TODAY,
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
        VALUE:data4.VALUE,
        fiftyTwo_WH:data4.fiftyTwo_WH,
        fiftyTwo_WL:data4.fiftyTwo_WL,
        TODAY:data4.TODAY,
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
        VALUE:data5.VALUE,
        fiftyTwo_WH:data5.fiftyTwo_WH,
        fiftyTwo_WL:data5.fiftyTwo_WL,
        TODAY:data5.TODAY,
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
        VALUE:data6.VALUE,
        fiftyTwo_WH:data6.fiftyTwo_WH,
        fiftyTwo_WL:data6.fiftyTwo_WL,
        TODAY:data6.TODAY,
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
        VALUE:data7.VALUE,
        fiftyTwo_WH:data7.fiftyTwo_WH,
        fiftyTwo_WL:data7.fiftyTwo_WL,
        TODAY:data7.TODAY,
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
        VALUE:data8.VALUE,
        fiftyTwo_WH:data8.fiftyTwo_WH,
        fiftyTwo_WL:data8.fiftyTwo_WL,
        TODAY:data8.TODAY,
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
        VALUE:data9.VALUE,
        fiftyTwo_WH:data9.fiftyTwo_WH,
        fiftyTwo_WL:data9.fiftyTwo_WL,
        TODAY:data9.TODAY,
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
        VALUE:data10.VALUE,
        fiftyTwo_WH:data10.fiftyTwo_WH,
        fiftyTwo_WL:data10.fiftyTwo_WL,
        TODAY:data10.TODAY,
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
        VALUE:data11.VALUE,
        fiftyTwo_WH:data11.fiftyTwo_WH,
        fiftyTwo_WL:data11.fiftyTwo_WL,
        TODAY:data11.TODAY,
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
        VALUE:data12.VALUE,
        fiftyTwo_WH:data12.fiftyTwo_WH,
        fiftyTwo_WL:data12.fiftyTwo_WL,
        TODAY:data12.TODAY,
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
        VALUE:data13.VALUE,
        fiftyTwo_WH:data13.fiftyTwo_WH,
        fiftyTwo_WL:data13.fiftyTwo_WL,
        TODAY:data13.TODAY,
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
        VALUE:data14.VALUE,
        fiftyTwo_WH:data14.fiftyTwo_WH,
        fiftyTwo_WL:data14.fiftyTwo_WL,
        TODAY:data14.TODAY,
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
        VALUE:data15.VALUE,
        fiftyTwo_WH:data15.fiftyTwo_WH,
        fiftyTwo_WL:data15.fiftyTwo_WL,
        TODAY:data15.TODAY,
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
    VALUE:data16.VALUE,
    fiftyTwo_WH:data16.fiftyTwo_WH,
    fiftyTwo_WL:data16.fiftyTwo_WL,
    TODAY:data16.TODAY,
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
    VALUE:data17.VALUE,
    fiftyTwo_WH:data17.fiftyTwo_WH,
    fiftyTwo_WL:data17.fiftyTwo_WL,
    TODAY:data17.TODAY,
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
    VALUE:data18.VALUE,
    fiftyTwo_WH:data18.fiftyTwo_WH,
    fiftyTwo_WL:data18.fiftyTwo_WL,
    TODAY:data18.TODAY,
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
    VALUE:data19.VALUE,
    fiftyTwo_WH:data19.fiftyTwo_WH,
    fiftyTwo_WL:data6.fiftyTwo_WL,
    TODAY:data19.TODAY,
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
    VALUE:data20.VALUE,
    fiftyTwo_WH:data20.fiftyTwo_WH,
    fiftyTwo_WL:data20.fiftyTwo_WL,
    TODAY:data20.TODAY,
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
    VALUE:data21.VALUE,
    fiftyTwo_WH:data21.fiftyTwo_WH,
    fiftyTwo_WL:data21.fiftyTwo_WL,
    TODAY:data21.TODAY,
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
    VALUE:data22.VALUE,
    fiftyTwo_WH:data22.fiftyTwo_WH,
    fiftyTwo_WL:data22.fiftyTwo_WL,
    TODAY:data22.TODAY,
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
    VALUE:data23.VALUE,
    fiftyTwo_WH:data23.fiftyTwo_WH,
    fiftyTwo_WL:data23.fiftyTwo_WL,
    TODAY:data23.TODAY,
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
    VALUE:data24.VALUE,
    fiftyTwo_WH:data24.fiftyTwo_WH,
    fiftyTwo_WL:data24.fiftyTwo_WL,
    TODAY:data24.TODAY,
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
    VALUE:data25.VALUE,
    fiftyTwo_WH:data25.fiftyTwo_WH,
    fiftyTwo_WL:data25.fiftyTwo_WL,
    TODAY:data25.TODAY,
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
    VALUE:data26.VALUE,
    fiftyTwo_WH:data26.fiftyTwo_WH,
    fiftyTwo_WL:data26.fiftyTwo_WL,
    TODAY:data26.TODAY,
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
    VALUE:data27.VALUE,
    fiftyTwo_WH:data27.fiftyTwo_WH,
    fiftyTwo_WL:data27.fiftyTwo_WL,
    TODAY:data27.TODAY,
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
    VALUE:data28.VALUE,
    fiftyTwo_WH:data28.fiftyTwo_WH,
    fiftyTwo_WL:data28.fiftyTwo_WL,
    TODAY:data28.TODAY,
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
    VALUE:data29.VALUE,
    fiftyTwo_WH:data29.fiftyTwo_WH,
    fiftyTwo_WL:data29.fiftyTwo_WL,
    TODAY:data29.TODAY,
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
    VALUE:data30.VALUE,
    fiftyTwo_WH:data30.fiftyTwo_WH,
    fiftyTwo_WL:data30.fiftyTwo_WL,
    TODAY:data30.TODAY,
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
    VALUE:data31.VALUE,
    fiftyTwo_WH:data31.fiftyTwo_WH,
    fiftyTwo_WL:data31.fiftyTwo_WL,
    TODAY:data31.TODAY,
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
    VALUE:data32.VALUE,
    fiftyTwo_WH:data32.fiftyTwo_WH,
    fiftyTwo_WL:data32.fiftyTwo_WL,
    TODAY:data32.TODAY,
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
    VALUE:data33.VALUE,
    fiftyTwo_WH:data33.fiftyTwo_WH,
    fiftyTwo_WL:data33.fiftyTwo_WL,
    TODAY:data33.TODAY,
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
    VALUE:data34.VALUE,
    fiftyTwo_WH:data34.fiftyTwo_WH,
    fiftyTwo_WL:data34.fiftyTwo_WL,
    TODAY:data34.TODAY,
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
    VALUE:data35.VALUE,
    fiftyTwo_WH:data35.fiftyTwo_WH,
    fiftyTwo_WL:data35.fiftyTwo_WL,
    TODAY:data35.TODAY,
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
    VALUE:data36.VALUE,
    fiftyTwo_WH:data36.fiftyTwo_WH,
    fiftyTwo_WL:data36.fiftyTwo_WL,
    TODAY:data36.TODAY,
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
    VALUE:data37.VALUE,
    fiftyTwo_WH:data37.fiftyTwo_WH,
    fiftyTwo_WL:data37.fiftyTwo_WL,
    TODAY:data37.TODAY,
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
    VALUE:data38.VALUE,
    fiftyTwo_WH:data38.fiftyTwo_WH,
    fiftyTwo_WL:data38.fiftyTwo_WL,
    TODAY:data38.TODAY,
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
    VALUE:data39.VALUE,
    fiftyTwo_WH:data39.fiftyTwo_WH,
    fiftyTwo_WL:data39.fiftyTwo_WL,
    TODAY:data39.TODAY,
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
    VALUE:data40.VALUE,
    fiftyTwo_WH:data40.fiftyTwo_WH,
    fiftyTwo_WL:data40.fiftyTwo_WL,
    TODAY:data40.TODAY,
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
    VALUE:data41.VALUE,
    fiftyTwo_WH:data41.fiftyTwo_WH,
    fiftyTwo_WL:data41.fiftyTwo_WL,
    TODAY:data41.TODAY,
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
    TODAY:data42.TODAY,
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
    VALUE:data43.VALUE,
    fiftyTwo_WH:data43.fiftyTwo_WH,
    fiftyTwo_WL:data43.fiftyTwo_WL,
    TODAY:data43.TODAY,
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
    VALUE:data44.VALUE,
    fiftyTwo_WH:data44.fiftyTwo_WH,
    fiftyTwo_WL:data44.fiftyTwo_WL,
    TODAY:data44.TODAY,
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
    VALUE:data45.VALUE,
    fiftyTwo_WH:data45.fiftyTwo_WH,
    fiftyTwo_WL:data45.fiftyTwo_WL,
    TODAY:data45.TODAY,
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
    VALUE:data46.VALUE,
    fiftyTwo_WH:data46.fiftyTwo_WH,
    fiftyTwo_WL:data46.fiftyTwo_WL,
    TODAY:data46.TODAY,
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
    VALUE:data47.VALUE,
    fiftyTwo_WH:data47.fiftyTwo_WH,
    fiftyTwo_WL:data47.fiftyTwo_WL,
    TODAY:data47.TODAY,
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
    VALUE:data48.VALUE,
    fiftyTwo_WH:data48.fiftyTwo_WH,
    fiftyTwo_WL:data48.fiftyTwo_WL,
    TODAY:data48.TODAY,
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
    VALUE:data49.VALUE,
    fiftyTwo_WH:data49.fiftyTwo_WH,
    fiftyTwo_WL:data49.fiftyTwo_WL,
    TODAY:data49.TODAY,
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
        VALUE:data50.VALUE,
        fiftyTwo_WH:data50.fiftyTwo_WH,
        fiftyTwo_WL:data50.fiftyTwo_WL,
        TODAY:data50.TODAY,
        Date:data50.Date,
        Time:data50.Time
    }
    const DataObj51={
        SYMBOL:data51.SYMBOL,
        OPEN:data51.OPEN,
        HIGH:data51.HIGH,
        LOW:data51.LOW,
        PREVCLOSE:data51.PREVCLOSE,
        LTP:data51.LTP,
        CHNG:data51.CHNG,
        CHANGPercentage:data51.CHANGPercentage,
        VOLUME:data51.VOLUME,
        VALUE:data51.VALUE,
        fiftyTwo_WH:data51.fiftyTwo_WH,
        fiftyTwo_WL:data51.fiftyTwo_WL,
        TODAY:data51.TODAY,
        Date:data51.Date,
        Time:data51.Time
    } 

try {
    const insertedData = await Data.insertMany([
        DataObj1,DataObj2,DataObj3,DataObj4,DataObj5,DataObj6,DataObj7,DataObj8,DataObj9,DataObj10,
        data11,DataObj12,DataObj13,DataObj14,DataObj15,DataObj16,DataObj17,DataObj18,DataObj19,DataObj20,
        DataObj21,DataObj22,DataObj23,DataObj24,DataObj25,DataObj26,DataObj27,DataObj28,DataObj29,DataObj30,
        DataObj31,DataObj32,DataObj33,DataObj34,DataObj35,DataObj36,DataObj37,DataObj38,DataObj39,DataObj40,
        DataObj41,DataObj42,DataObj43,DataObj44,DataObj45,DataObj46,DataObj47,DataObj48,DataObj49,DataObj50,
        DataObj51
    ]);
    res.status(201).send({message: `Data inserted successfully `});
}catch(err){
    console.log("Something went wrong while saving to DB", err.message);
    res.status(500).send({message: "Some internal error while inserting the element"});
}
}


async function getScrapData(req,res){
    console.log("t>>>",req.headers.time)
    const stocksData = await Data.find({
        Date:req.headers.date,
        Time:req.headers.time
    })
    if(!stocksData[0]){
        return res.status(404).send({message:`Stock data is not found for given Time please wait we are collecting data`})
    }
    res.status(200).send(stocksData)
}  

async function getScrapData20(req,res){
    console.log("t2>>>",req.headers.time1)
const stocksData = await Data.find({
    Date:req.headers.date,
    Time:req.headers.time1
})
if(!stocksData[0]){
    return res.status(404).send({message:`Stock data is not found for given Time please wait we are collecting data`})
}
res.status(200).send(stocksData)
}  

module.exports={getScrapData,getScrapData20,scrapData}
// [{$match : {Date:req.params.date}}]