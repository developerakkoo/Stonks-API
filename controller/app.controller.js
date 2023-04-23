// const Data = require('../model/scraperData.model')
// const csvtojson = require("csvtojson");

// // require('dotenv').config();



// async function  scrapData(req,res){

//   csvtojson()
//   .fromFile("record.csv")
//   .then(csvData => {
//     const data0 = csvData[0]
//     const data1 = csvData[1]
//     const data2 = csvData[2]
//     const data3 = csvData[3]
//     const data4 = csvData[4]
//     const data5 = csvData[5]
//     const data6 = csvData[6]
//     const data7 = csvData[7]
//     const data8 = csvData[8]
//     const data9 = csvData[9]
//     const data10 = csvData[10]
//     const data11 = csvData[11]
//     const data12 = csvData[12]
//     const data13= csvData[13]
//     const data14 = csvData[14]
//     const data15 = csvData[15]
//     const data16 = csvData[16]
//     const data17 = csvData[17]
//     const data18 = csvData[18]
//     const data19 = csvData[19]
//     const data20 = csvData[20]    
//     const data21 = csvData[21]
//     const data22 = csvData[22]
//     const data23 = csvData[23]
//     const data24 = csvData[24]
//     const data25 = csvData[25]
//     const data26 = csvData[26]
//     const data27 = csvData[27]
//     const data28 = csvData[28]
//     const data29 = csvData[29]    
//     const data30 = csvData[30]
//     const data31 = csvData[31]
//     const data32 = csvData[32]
//     const data33 = csvData[33]
//     const data34 = csvData[34]
//     const data35 = csvData[35]
//     const data36 = csvData[36]
//     const data37 = csvData[37]
//     const data38 = csvData[38]    
//     const data39 = csvData[39]
//     const data40 = csvData[40]
//     const data41 = csvData[44]
//     const data42 = csvData[42]
//     const data43 = csvData[43]
//     const data44 = csvData[44]
//     const data45 = csvData[45]
//     const data46 = csvData[46]
//     const data47 = csvData[47]
//     const data48 = csvData[48]
//     const data49 = csvData[49]
//     const data50 = csvData[50]
//     console.log()
//       const DataObj0={
//     SYMBOL:JSON.stringify(data0.SYMBOL),
//     OPEN:JSON.stringify(data0.OPEN),
//     HIGH:JSON.stringify(data0.HIGH),
//     LOW:JSON.stringify(data0.LOW),
//     PREVCLOSE:JSON.stringify(data0.PREVCLOSE),
//     LTP:JSON.stringify(data0.LTP),
//     CHNG:JSON.stringify(data0.CHNG),
//     CHANGPercentage:JSON.stringify(data0.CHANGPercentage),
//     VOLUME:JSON.stringify(data0.VOLUME),
//     VALUE:JSON.stringify(data0.VALUE),
//     fiftyTwo_WH:JSON.stringify(data0.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data0.fiftyTwo_WL),
//     TODAY:JSON.stringify(data0.TODAY),
//     Date_Time:JSON.stringify(data0.Date_Time)
//   }
//   const DataObj1={
//     SYMBOL:JSON.stringify(data1.SYMBOL),
//     OPEN:JSON.stringify(data1.OPEN),
//     HIGH:JSON.stringify(data1.HIGH),
//     LOW:JSON.stringify(data1.LOW),
//     PREVCLOSE:JSON.stringify(data1.PREVCLOSE),
//     LTP:JSON.stringify(data1.LTP),
//     CHNG:JSON.stringify(data1.CHNG),
//     CHANGPercentage:JSON.stringify(data1.CHANGPercentage),
//     VOLUME:JSON.stringify(data1.VOLUME),
//     VALUE:JSON.stringify(data1.VALUE),
//     fiftyTwo_WH:JSON.stringify(data1.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data1.fiftyTwo_WL),
//     TODAY:JSON.stringify(data1.TODAY),
//     Date_Time:JSON.stringify(data1.Date_Time)
//   }
//   const DataObj2={
//     SYMBOL:JSON.stringify(data2.SYMBOL),
//     OPEN:JSON.stringify(data2.OPEN),
//     HIGH:JSON.stringify(data2.HIGH),
//     LOW:JSON.stringify(data2.LOW),
//     PREVCLOSE:JSON.stringify(data2.PREVCLOSE),
//     LTP:JSON.stringify(data2.LTP),
//     CHNG:JSON.stringify(data2.CHNG),
//     CHANGPercentage:JSON.stringify(data2.CHANGPercentage),
//     VOLUME:JSON.stringify(data2.VOLUME),
//     VALUE:JSON.stringify(data2.VALUE),
//     fiftyTwo_WH:JSON.stringify(data2.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data2.fiftyTwo_WL),
//     TODAY:JSON.stringify(data2.TODAY),
//     Date_Time:JSON.stringify(data2.Date_Time)
//   }
//   const DataObj3={
//     SYMBOL:JSON.stringify(data3.SYMBOL),
//     OPEN:JSON.stringify(data3.OPEN),
//     HIGH:JSON.stringify(data3.HIGH),
//     LOW:JSON.stringify(data3.LOW),
//     PREVCLOSE:JSON.stringify(data3.PREVCLOSE),
//     LTP:JSON.stringify(data3.LTP),
//     CHNG:JSON.stringify(data3.CHNG),
//     CHANGPercentage:JSON.stringify(data3.CHANGPercentage),
//     VOLUME:JSON.stringify(data3.VOLUME),
//     VALUE:JSON.stringify(data3.VALUE),
//     fiftyTwo_WH:JSON.stringify(data3.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data3.fiftyTwo_WL),
//     TODAY:JSON.stringify(data3.TODAY),
//     Date_Time:JSON.stringify(data3.Date_Time)
//   }
//   const DataObj4={
//     SYMBOL:JSON.stringify(data4.SYMBOL),
//     OPEN:JSON.stringify(data4.OPEN),
//     HIGH:JSON.stringify(data4.HIGH),
//     LOW:JSON.stringify(data4.LOW),
//     PREVCLOSE:JSON.stringify(data4.PREVCLOSE),
//     LTP:JSON.stringify(data4.LTP),
//     CHNG:JSON.stringify(data4.CHNG),
//     CHANGPercentage:JSON.stringify(data4.CHANGPercentage),
//     VOLUME:JSON.stringify(data4.VOLUME),
//     VALUE:JSON.stringify(data4.VALUE),
//     fiftyTwo_WH:JSON.stringify(data4.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data4.fiftyTwo_WL),
//     TODAY:JSON.stringify(data4.TODAY),
//     Date_Time:JSON.stringify(data4.Date_Time)
//   }
//   const DataObj5={
//     SYMBOL:JSON.stringify(data5.SYMBOL),
//     OPEN:JSON.stringify(data5.OPEN),
//     HIGH:JSON.stringify(data5.HIGH),
//     LOW:JSON.stringify(data5.LOW),
//     PREVCLOSE:JSON.stringify(data5.PREVCLOSE),
//     LTP:JSON.stringify(data5.LTP),
//     CHNG:JSON.stringify(data5.CHNG),
//     CHANGPercentage:JSON.stringify(data5.CHANGPercentage),
//     VOLUME:JSON.stringify(data5.VOLUME),
//     VALUE:JSON.stringify(data5.VALUE),
//     fiftyTwo_WH:JSON.stringify(data5.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data5.fiftyTwo_WL),
//     TODAY:JSON.stringify(data5.TODAY),
//     Date_Time:JSON.stringify(data5.Date_Time)
//   }
//   const DataObj6={
//     SYMBOL:JSON.stringify(data6.SYMBOL),
//     OPEN:JSON.stringify(data6.OPEN),
//     HIGH:JSON.stringify(data6.HIGH),
//     LOW:JSON.stringify(data6.LOW),
//     PREVCLOSE:JSON.stringify(data6.PREVCLOSE),
//     LTP:JSON.stringify(data6.LTP),
//     CHNG:JSON.stringify(data6.CHNG),
//     CHANGPercentage:JSON.stringify(data6.CHANGPercentage),
//     VOLUME:JSON.stringify(data6.VOLUME),
//     VALUE:JSON.stringify(data6.VALUE),
//     fiftyTwo_WH:JSON.stringify(data6.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data6.fiftyTwo_WL),
//     TODAY:JSON.stringify(data6.TODAY),
//     Date_Time:JSON.stringify(data6.Date_Time)
//   }
//   const DataObj7={
//     SYMBOL:JSON.stringify(data7.SYMBOL),
//     OPEN:JSON.stringify(data7.OPEN),
//     HIGH:JSON.stringify(data7.HIGH),
//     LOW:JSON.stringify(data7.LOW),
//     PREVCLOSE:JSON.stringify(data7.PREVCLOSE),
//     LTP:JSON.stringify(data7.LTP),
//     CHNG:JSON.stringify(data7.CHNG),
//     CHANGPercentage:JSON.stringify(data7.CHANGPercentage),
//     VOLUME:JSON.stringify(data7.VOLUME),
//     VALUE:JSON.stringify(data7.VALUE),
//     fiftyTwo_WH:JSON.stringify(data7.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data7.fiftyTwo_WL),
//     TODAY:JSON.stringify(data7.TODAY),
//     Date_Time:JSON.stringify(data7.Date_Time)
//   }
//   const DataObj8={
//     SYMBOL:JSON.stringify(data8.SYMBOL),
//     OPEN:JSON.stringify(data8.OPEN),
//     HIGH:JSON.stringify(data8.HIGH),
//     LOW:JSON.stringify(data8.LOW),
//     PREVCLOSE:JSON.stringify(data8.PREVCLOSE),
//     LTP:JSON.stringify(data8.LTP),
//     CHNG:JSON.stringify(data8.CHNG),
//     CHANGPercentage:JSON.stringify(data8.CHANGPercentage),
//     VOLUME:JSON.stringify(data8.VOLUME),
//     VALUE:JSON.stringify(data8.VALUE),
//     fiftyTwo_WH:JSON.stringify(data6.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data6.fiftyTwo_WL),
//     TODAY:JSON.stringify(data8.TODAY),
//     Date_Time:JSON.stringify(data8.Date_Time)
//   }
//   const DataObj9={
//     SYMBOL:JSON.stringify(data9.SYMBOL),
//     OPEN:JSON.stringify(data9.OPEN),
//     HIGH:JSON.stringify(data9.HIGH),
//     LOW:JSON.stringify(data9.LOW),
//     PREVCLOSE:JSON.stringify(data9.PREVCLOSE),
//     LTP:JSON.stringify(data9.LTP),
//     CHNG:JSON.stringify(data9.CHNG),
//     CHANGPercentage:JSON.stringify(data9.CHANGPercentage),
//     VOLUME:JSON.stringify(data9.VOLUME),
//     VALUE:JSON.stringify(data9.VALUE),
//     fiftyTwo_WH:JSON.stringify(data9.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data9.fiftyTwo_WL),
//     TODAY:JSON.stringify(data9.TODAY),
//     Date_Time:JSON.stringify(data9.Date_Time)
//   }
//   const DataObj10={
//     SYMBOL:JSON.stringify(data10.SYMBOL),
//     OPEN:JSON.stringify(data10.OPEN),
//     HIGH:JSON.stringify(data10.HIGH),
//     LOW:JSON.stringify(data10.LOW),
//     PREVCLOSE:JSON.stringify(data10.PREVCLOSE),
//     LTP:JSON.stringify(data10.LTP),
//     CHNG:JSON.stringify(data10.CHNG),
//     CHANGPercentage:JSON.stringify(data10.CHANGPercentage),
//     VOLUME:JSON.stringify(data10.VOLUME),
//     VALUE:JSON.stringify(data10.VALUE),
//     fiftyTwo_WH:JSON.stringify(data10.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data6.fiftyTwo_WL),
//     TODAY:JSON.stringify(data10.TODAY),
//     Date_Time:JSON.stringify(data10.Date_Time)
//   }
//   const DataObj11={
//     SYMBOL:JSON.stringify(data11.SYMBOL),
//     OPEN:JSON.stringify(data11.OPEN),
//     HIGH:JSON.stringify(data11.HIGH),
//     LOW:JSON.stringify(data11.LOW),
//     PREVCLOSE:JSON.stringify(data11.PREVCLOSE),
//     LTP:JSON.stringify(data11.LTP),
//     CHNG:JSON.stringify(data11.CHNG),
//     CHANGPercentage:JSON.stringify(data11.CHANGPercentage),
//     VOLUME:JSON.stringify(data11.VOLUME),
//     VALUE:JSON.stringify(data11.VALUE),
//     fiftyTwo_WH:JSON.stringify(data11.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data11.fiftyTwo_WL),
//     TODAY:JSON.stringify(data11.TODAY),
//     Date_Time:JSON.stringify(data11.Date_Time)
//   }
//   const DataObj12={
//     SYMBOL:JSON.stringify(data12.SYMBOL),
//     OPEN:JSON.stringify(data12.OPEN),
//     HIGH:JSON.stringify(data12.HIGH),
//     LOW:JSON.stringify(data12.LOW),
//     PREVCLOSE:JSON.stringify(data12.PREVCLOSE),
//     LTP:JSON.stringify(data12.LTP),
//     CHNG:JSON.stringify(data12.CHNG),
//     CHANGPercentage:JSON.stringify(data12.CHANGPercentage),
//     VOLUME:JSON.stringify(data12.VOLUME),
//     VALUE:JSON.stringify(data12.VALUE),
//     fiftyTwo_WH:JSON.stringify(data12.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data12.fiftyTwo_WL),
//     TODAY:JSON.stringify(data12.TODAY),
//     Date_Time:JSON.stringify(data12.Date_Time)
//   }
//   const DataObj13={
//     SYMBOL:JSON.stringify(data13.SYMBOL),
//     OPEN:JSON.stringify(data13.OPEN),
//     HIGH:JSON.stringify(data13.HIGH),
//     LOW:JSON.stringify(data13.LOW),
//     PREVCLOSE:JSON.stringify(data13.PREVCLOSE),
//     LTP:JSON.stringify(data13.LTP),
//     CHNG:JSON.stringify(data13.CHNG),
//     CHANGPercentage:JSON.stringify(data13.CHANGPercentage),
//     VOLUME:JSON.stringify(data3.VOLUME),
//     VALUE:JSON.stringify(data13.VALUE),
//     fiftyTwo_WH:JSON.stringify(data13.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data13.fiftyTwo_WL),
//     TODAY:JSON.stringify(data13.TODAY),
//     Date_Time:JSON.stringify(data13.Date_Time)
//   }
//   const DataObj14={
//     SYMBOL:JSON.stringify(data14.SYMBOL),
//     OPEN:JSON.stringify(data14.OPEN),
//     HIGH:JSON.stringify(data14.HIGH),
//     LOW:JSON.stringify(data14.LOW),
//     PREVCLOSE:JSON.stringify(data14.PREVCLOSE),
//     LTP:JSON.stringify(data14.LTP),
//     CHNG:JSON.stringify(data14.CHNG),
//     CHANGPercentage:JSON.stringify(data14.CHANGPercentage),
//     VOLUME:JSON.stringify(data14.VOLUME),
//     VALUE:JSON.stringify(data14.VALUE),
//     fiftyTwo_WH:JSON.stringify(data14.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data14.fiftyTwo_WL),
//     TODAY:JSON.stringify(data14.TODAY),
//     Date_Time:JSON.stringify(data14.Date_Time)
//   }
//   const DataObj15={
//     SYMBOL:JSON.stringify(data15.SYMBOL),
//     OPEN:JSON.stringify(data15.OPEN),
//     HIGH:JSON.stringify(data15.HIGH),
//     LOW:JSON.stringify(data15.LOW),
//     PREVCLOSE:JSON.stringify(data15.PREVCLOSE),
//     LTP:JSON.stringify(data15.LTP),
//     CHNG:JSON.stringify(data15.CHNG),
//     CHANGPercentage:JSON.stringify(data15.CHANGPercentage),
//     VOLUME:JSON.stringify(data15.VOLUME),
//     VALUE:JSON.stringify(data15.VALUE),
//     fiftyTwo_WH:JSON.stringify(data15.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data15.fiftyTwo_WL),
//     TODAY:JSON.stringify(data15.TODAY),
//     Date_Time:JSON.stringify(data15.Date_Time)
//   }
//   const DataObj16={
//     SYMBOL:JSON.stringify(data16.SYMBOL),
//     OPEN:JSON.stringify(data16.OPEN),
//     HIGH:JSON.stringify(data16.HIGH),
//     LOW:JSON.stringify(data16.LOW),
//     PREVCLOSE:JSON.stringify(data16.PREVCLOSE),
//     LTP:JSON.stringify(data16.LTP),
//     CHNG:JSON.stringify(data16.CHNG),
//     CHANGPercentage:JSON.stringify(data16.CHANGPercentage),
//     VOLUME:JSON.stringify(data16.VOLUME),
//     VALUE:JSON.stringify(data16.VALUE),
//     fiftyTwo_WH:JSON.stringify(data16.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data16.fiftyTwo_WL),
//     TODAY:JSON.stringify(data16.TODAY),
//     Date_Time:JSON.stringify(data16.Date_Time)
//   }
//   const DataObj17={
//     SYMBOL:JSON.stringify(data17.SYMBOL),
//     OPEN:JSON.stringify(data17.OPEN),
//     HIGH:JSON.stringify(data17.HIGH),
//     LOW:JSON.stringify(data17.LOW),
//     PREVCLOSE:JSON.stringify(data17.PREVCLOSE),
//     LTP:JSON.stringify(data17.LTP),
//     CHNG:JSON.stringify(data17.CHNG),
//     CHANGPercentage:JSON.stringify(data17.CHANGPercentage),
//     VOLUME:JSON.stringify(data17.VOLUME),
//     VALUE:JSON.stringify(data17.VALUE),
//     fiftyTwo_WH:JSON.stringify(data17.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data17.fiftyTwo_WL),
//     TODAY:JSON.stringify(data17.TODAY),
//     Date_Time:JSON.stringify(data17.Date_Time)
//   }
//   const DataObj18={
//     SYMBOL:JSON.stringify(data18.SYMBOL),
//     OPEN:JSON.stringify(data18.OPEN),
//     HIGH:JSON.stringify(data18.HIGH),
//     LOW:JSON.stringify(data18.LOW),
//     PREVCLOSE:JSON.stringify(data18.PREVCLOSE),
//     LTP:JSON.stringify(data18.LTP),
//     CHNG:JSON.stringify(data18.CHNG),
//     CHANGPercentage:JSON.stringify(data18.CHANGPercentage),
//     VOLUME:JSON.stringify(data18.VOLUME),
//     VALUE:JSON.stringify(data18.VALUE),
//     fiftyTwo_WH:JSON.stringify(data18.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data18.fiftyTwo_WL),
//     TODAY:JSON.stringify(data18.TODAY),
//     Date_Time:JSON.stringify(data18.Date_Time)
//   }
//   const DataObj19={
//     SYMBOL:JSON.stringify(data19.SYMBOL),
//     OPEN:JSON.stringify(data19.OPEN),
//     HIGH:JSON.stringify(data19.HIGH),
//     LOW:JSON.stringify(data19.LOW),
//     PREVCLOSE:JSON.stringify(data19.PREVCLOSE),
//     LTP:JSON.stringify(data19.LTP),
//     CHNG:JSON.stringify(data19.CHNG),
//     CHANGPercentage:JSON.stringify(data19.CHANGPercentage),
//     VOLUME:JSON.stringify(data19.VOLUME),
//     VALUE:JSON.stringify(data19.VALUE),
//     fiftyTwo_WH:JSON.stringify(data19.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data6.fiftyTwo_WL),
//     TODAY:JSON.stringify(data19.TODAY),
//     Date_Time:JSON.stringify(data19.Date_Time)
//   }
//   const DataObj20={
//     SYMBOL:JSON.stringify(data20.SYMBOL),
//     OPEN:JSON.stringify(data20.OPEN),
//     HIGH:JSON.stringify(data20.HIGH),
//     LOW:JSON.stringify(data20.LOW),
//     PREVCLOSE:JSON.stringify(data20.PREVCLOSE),
//     LTP:JSON.stringify(data20.LTP),
//     CHNG:JSON.stringify(data20.CHNG),
//     CHANGPercentage:JSON.stringify(data20.CHANGPercentage),
//     VOLUME:JSON.stringify(data20.VOLUME),
//     VALUE:JSON.stringify(data20.VALUE),
//     fiftyTwo_WH:JSON.stringify(data20.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data20.fiftyTwo_WL),
//     TODAY:JSON.stringify(data20.TODAY),
//     Date_Time:JSON.stringify(data20.Date_Time)
//   }
//   const DataObj21={
//     SYMBOL:JSON.stringify(data21.SYMBOL),
//     OPEN:JSON.stringify(data21.OPEN),
//     HIGH:JSON.stringify(data21.HIGH),
//     LOW:JSON.stringify(data21.LOW),
//     PREVCLOSE:JSON.stringify(data21.PREVCLOSE),
//     LTP:JSON.stringify(data21.LTP),
//     CHNG:JSON.stringify(data21.CHNG),
//     CHANGPercentage:JSON.stringify(data21.CHANGPercentage),
//     VOLUME:JSON.stringify(data21.VOLUME),
//     VALUE:JSON.stringify(data21.VALUE),
//     fiftyTwo_WH:JSON.stringify(data21.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data21.fiftyTwo_WL),
//     TODAY:JSON.stringify(data21.TODAY),
//     Date_Time:JSON.stringify(data21.Date_Time)
//   }
//   const DataObj22={
//     SYMBOL:JSON.stringify(data22.SYMBOL),
//     OPEN:JSON.stringify(data22.OPEN),
//     HIGH:JSON.stringify(data22.HIGH),
//     LOW:JSON.stringify(data22.LOW),
//     PREVCLOSE:JSON.stringify(data22.PREVCLOSE),
//     LTP:JSON.stringify(data22.LTP),
//     CHNG:JSON.stringify(data22.CHNG),
//     CHANGPercentage:JSON.stringify(data22.CHANGPercentage),
//     VOLUME:JSON.stringify(data22.VOLUME),
//     VALUE:JSON.stringify(data22.VALUE),
//     fiftyTwo_WH:JSON.stringify(data22.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data22.fiftyTwo_WL),
//     TODAY:JSON.stringify(data22.TODAY),
//     Date_Time:JSON.stringify(data22.Date_Time)
//   }
//   const DataObj23={
//     SYMBOL:JSON.stringify(data23.SYMBOL),
//     OPEN:JSON.stringify(data23.OPEN),
//     HIGH:JSON.stringify(data23.HIGH),
//     LOW:JSON.stringify(data23.LOW),
//     PREVCLOSE:JSON.stringify(data23.PREVCLOSE),
//     LTP:JSON.stringify(data23.LTP),
//     CHNG:JSON.stringify(data23.CHNG),
//     CHANGPercentage:JSON.stringify(data23.CHANGPercentage),
//     VOLUME:JSON.stringify(data23.VOLUME),
//     VALUE:JSON.stringify(data23.VALUE),
//     fiftyTwo_WH:JSON.stringify(data23.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data23.fiftyTwo_WL),
//     TODAY:JSON.stringify(data23.TODAY),
//     Date_Time:JSON.stringify(data23.Date_Time)
//   }
//   const DataObj24={
//     SYMBOL:JSON.stringify(data24.SYMBOL),
//     OPEN:JSON.stringify(data24.OPEN),
//     HIGH:JSON.stringify(data24.HIGH),
//     LOW:JSON.stringify(data24.LOW),
//     PREVCLOSE:JSON.stringify(data24.PREVCLOSE),
//     LTP:JSON.stringify(data24.LTP),
//     CHNG:JSON.stringify(data24.CHNG),
//     CHANGPercentage:JSON.stringify(data24.CHANGPercentage),
//     VOLUME:JSON.stringify(data24.VOLUME),
//     VALUE:JSON.stringify(data24.VALUE),
//     fiftyTwo_WH:JSON.stringify(data24.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data24.fiftyTwo_WL),
//     TODAY:JSON.stringify(data24.TODAY),
//     Date_Time:JSON.stringify(data24.Date_Time)
//   }
//   const DataObj25={
//     SYMBOL:JSON.stringify(data25.SYMBOL),
//     OPEN:JSON.stringify(data25.OPEN),
//     HIGH:JSON.stringify(data25.HIGH),
//     LOW:JSON.stringify(data25.LOW),
//     PREVCLOSE:JSON.stringify(data25.PREVCLOSE),
//     LTP:JSON.stringify(data25.LTP),
//     CHNG:JSON.stringify(data25.CHNG),
//     CHANGPercentage:JSON.stringify(data25.CHANGPercentage),
//     VOLUME:JSON.stringify(data25.VOLUME),
//     VALUE:JSON.stringify(data25.VALUE),
//     fiftyTwo_WH:JSON.stringify(data25.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data25.fiftyTwo_WL),
//     TODAY:JSON.stringify(data25.TODAY),
//     Date_Time:JSON.stringify(data25.Date_Time)
//   }
//   const DataObj26={
//     SYMBOL:JSON.stringify(data26.SYMBOL),
//     OPEN:JSON.stringify(data26.OPEN),
//     HIGH:JSON.stringify(data26.HIGH),
//     LOW:JSON.stringify(data26.LOW),
//     PREVCLOSE:JSON.stringify(data26.PREVCLOSE),
//     LTP:JSON.stringify(data26.LTP),
//     CHNG:JSON.stringify(data26.CHNG),
//     CHANGPercentage:JSON.stringify(data26.CHANGPercentage),
//     VOLUME:JSON.stringify(data26.VOLUME),
//     VALUE:JSON.stringify(data26.VALUE),
//     fiftyTwo_WH:JSON.stringify(data26.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data26.fiftyTwo_WL),
//     TODAY:JSON.stringify(data26.TODAY),
//     Date_Time:JSON.stringify(data26.Date_Time)
//   }
//   const DataObj27={
//     SYMBOL:JSON.stringify(data27.SYMBOL),
//     OPEN:JSON.stringify(data27.OPEN),
//     HIGH:JSON.stringify(data27.HIGH),
//     LOW:JSON.stringify(data27.LOW),
//     PREVCLOSE:JSON.stringify(data27.PREVCLOSE),
//     LTP:JSON.stringify(data27.LTP),
//     CHNG:JSON.stringify(data27.CHNG),
//     CHANGPercentage:JSON.stringify(data27.CHANGPercentage),
//     VOLUME:JSON.stringify(data27.VOLUME),
//     VALUE:JSON.stringify(data27.VALUE),
//     fiftyTwo_WH:JSON.stringify(data27.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data27.fiftyTwo_WL),
//     TODAY:JSON.stringify(data27.TODAY),
//     Date_Time:JSON.stringify(data27.Date_Time)
//   }
//   const DataObj28={
//     SYMBOL:JSON.stringify(data28.SYMBOL),
//     OPEN:JSON.stringify(data28.OPEN),
//     HIGH:JSON.stringify(data28.HIGH),
//     LOW:JSON.stringify(data28.LOW),
//     PREVCLOSE:JSON.stringify(data28.PREVCLOSE),
//     LTP:JSON.stringify(data28.LTP),
//     CHNG:JSON.stringify(data28.CHNG),
//     CHANGPercentage:JSON.stringify(data28.CHANGPercentage),
//     VOLUME:JSON.stringify(data28.VOLUME),
//     VALUE:JSON.stringify(data28.VALUE),
//     fiftyTwo_WH:JSON.stringify(data28.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data28.fiftyTwo_WL),
//     TODAY:JSON.stringify(data28.TODAY),
//     Date_Time:JSON.stringify(data28.Date_Time)
//   }
//   const DataObj29={
//     SYMBOL:JSON.stringify(data29.SYMBOL),
//     OPEN:JSON.stringify(data29.OPEN),
//     HIGH:JSON.stringify(data29.HIGH),
//     LOW:JSON.stringify(data29.LOW),
//     PREVCLOSE:JSON.stringify(data29.PREVCLOSE),
//     LTP:JSON.stringify(data29.LTP),
//     CHNG:JSON.stringify(data29.CHNG),
//     CHANGPercentage:JSON.stringify(data29.CHANGPercentage),
//     VOLUME:JSON.stringify(data29.VOLUME),
//     VALUE:JSON.stringify(data29.VALUE),
//     fiftyTwo_WH:JSON.stringify(data29.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data29.fiftyTwo_WL),
//     TODAY:JSON.stringify(data29.TODAY),
//     Date_Time:JSON.stringify(data29.Date_Time)
//   }  
//   const DataObj30={
//     SYMBOL:JSON.stringify(data30.SYMBOL),
//     OPEN:JSON.stringify(data30.OPEN),
//     HIGH:JSON.stringify(data30.HIGH),
//     LOW:JSON.stringify(data30.LOW),
//     PREVCLOSE:JSON.stringify(data30.PREVCLOSE),
//     LTP:JSON.stringify(data30.LTP),
//     CHNG:JSON.stringify(data30.CHNG),
//     CHANGPercentage:JSON.stringify(data30.CHANGPercentage),
//     VOLUME:JSON.stringify(data30.VOLUME),
//     VALUE:JSON.stringify(data30.VALUE),
//     fiftyTwo_WH:JSON.stringify(data30.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data30.fiftyTwo_WL),
//     TODAY:JSON.stringify(data30.TODAY),
//     Date_Time:JSON.stringify(data30.Date_Time)
//   } 
//   const DataObj31={
//     SYMBOL:JSON.stringify(data31.SYMBOL),
//     OPEN:JSON.stringify(data31.OPEN),
//     HIGH:JSON.stringify(data31.HIGH),
//     LOW:JSON.stringify(data31.LOW),
//     PREVCLOSE:JSON.stringify(data31.PREVCLOSE),
//     LTP:JSON.stringify(data31.LTP),
//     CHNG:JSON.stringify(data31.CHNG),
//     CHANGPercentage:JSON.stringify(data31.CHANGPercentage),
//     VOLUME:JSON.stringify(data31.VOLUME),
//     VALUE:JSON.stringify(data31.VALUE),
//     fiftyTwo_WH:JSON.stringify(data31.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data31.fiftyTwo_WL),
//     TODAY:JSON.stringify(data31.TODAY),
//     Date_Time:JSON.stringify(data31.Date_Time)
//   }
//   const DataObj32={
//     SYMBOL:JSON.stringify(data32.SYMBOL),
//     OPEN:JSON.stringify(data32.OPEN),
//     HIGH:JSON.stringify(data32.HIGH),
//     LOW:JSON.stringify(data32.LOW),
//     PREVCLOSE:JSON.stringify(data32.PREVCLOSE),
//     LTP:JSON.stringify(data32.LTP),
//     CHNG:JSON.stringify(data32.CHNG),
//     CHANGPercentage:JSON.stringify(data32.CHANGPercentage),
//     VOLUME:JSON.stringify(data32.VOLUME),
//     VALUE:JSON.stringify(data32.VALUE),
//     fiftyTwo_WH:JSON.stringify(data32.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data32.fiftyTwo_WL),
//     TODAY:JSON.stringify(data32.TODAY),
//     Date_Time:JSON.stringify(data32.Date_Time)
//   }
//   const DataObj33={
//     SYMBOL:JSON.stringify(data33.SYMBOL),
//     OPEN:JSON.stringify(data33.OPEN),
//     HIGH:JSON.stringify(data33.HIGH),
//     LOW:JSON.stringify(data33.LOW),
//     PREVCLOSE:JSON.stringify(data33.PREVCLOSE),
//     LTP:JSON.stringify(data33.LTP),
//     CHNG:JSON.stringify(data33.CHNG),
//     CHANGPercentage:JSON.stringify(data33.CHANGPercentage),
//     VOLUME:JSON.stringify(data33.VOLUME),
//     VALUE:JSON.stringify(data33.VALUE),
//     fiftyTwo_WH:JSON.stringify(data33.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data33.fiftyTwo_WL),
//     TODAY:JSON.stringify(data33.TODAY),
//     Date_Time:JSON.stringify(data33.Date_Time)
//   }
//   const DataObj34={
//     SYMBOL:JSON.stringify(data34.SYMBOL),
//     OPEN:JSON.stringify(data34.OPEN),
//     HIGH:JSON.stringify(data34.HIGH),
//     LOW:JSON.stringify(data34.LOW),
//     PREVCLOSE:JSON.stringify(data34.PREVCLOSE),
//     LTP:JSON.stringify(data34.LTP),
//     CHNG:JSON.stringify(data34.CHNG),
//     CHANGPercentage:JSON.stringify(data34.CHANGPercentage),
//     VOLUME:JSON.stringify(data34.VOLUME),
//     VALUE:JSON.stringify(data34.VALUE),
//     fiftyTwo_WH:JSON.stringify(data34.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data34.fiftyTwo_WL),
//     TODAY:JSON.stringify(data34.TODAY),
//     Date_Time:JSON.stringify(data34.Date_Time)
//   }
//   const DataObj35={
//     SYMBOL:JSON.stringify(data35.SYMBOL),
//     OPEN:JSON.stringify(data35.OPEN),
//     HIGH:JSON.stringify(data35.HIGH),
//     LOW:JSON.stringify(data35.LOW),
//     PREVCLOSE:JSON.stringify(data35.PREVCLOSE),
//     LTP:JSON.stringify(data35.LTP),
//     CHNG:JSON.stringify(data35.CHNG),
//     CHANGPercentage:JSON.stringify(data35.CHANGPercentage),
//     VOLUME:JSON.stringify(data35.VOLUME),
//     VALUE:JSON.stringify(data35.VALUE),
//     fiftyTwo_WH:JSON.stringify(data35.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data35.fiftyTwo_WL),
//     TODAY:JSON.stringify(data35.TODAY),
//     Date_Time:JSON.stringify(data35.Date_Time)
//   }
//   const DataObj36={
//     SYMBOL:JSON.stringify(data36.SYMBOL),
//     OPEN:JSON.stringify(data36.OPEN),
//     HIGH:JSON.stringify(data36.HIGH),
//     LOW:JSON.stringify(data36.LOW),
//     PREVCLOSE:JSON.stringify(data36.PREVCLOSE),
//     LTP:JSON.stringify(data36.LTP),
//     CHNG:JSON.stringify(data36.CHNG),
//     CHANGPercentage:JSON.stringify(data36.CHANGPercentage),
//     VOLUME:JSON.stringify(data36.VOLUME),
//     VALUE:JSON.stringify(data36.VALUE),
//     fiftyTwo_WH:JSON.stringify(data36.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data36.fiftyTwo_WL),
//     TODAY:JSON.stringify(data36.TODAY),
//     Date_Time:JSON.stringify(data36.Date_Time)
//   }
//   const DataObj37={
//     SYMBOL:JSON.stringify(data37.SYMBOL),
//     OPEN:JSON.stringify(data37.OPEN),
//     HIGH:JSON.stringify(data37.HIGH),
//     LOW:JSON.stringify(data37.LOW),
//     PREVCLOSE:JSON.stringify(data37.PREVCLOSE),
//     LTP:JSON.stringify(data37.LTP),
//     CHNG:JSON.stringify(data37.CHNG),
//     CHANGPercentage:JSON.stringify(data37.CHANGPercentage),
//     VOLUME:JSON.stringify(data37.VOLUME),
//     VALUE:JSON.stringify(data37.VALUE),
//     fiftyTwo_WH:JSON.stringify(data37.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data37.fiftyTwo_WL),
//     TODAY:JSON.stringify(data37.TODAY),
//     Date_Time:JSON.stringify(data37.Date_Time)
//   }
//   const DataObj38={
//     SYMBOL:JSON.stringify(data38.SYMBOL),
//     OPEN:JSON.stringify(data38.OPEN),
//     HIGH:JSON.stringify(data38.HIGH),
//     LOW:JSON.stringify(data38.LOW),
//     PREVCLOSE:JSON.stringify(data38.PREVCLOSE),
//     LTP:JSON.stringify(data38.LTP),
//     CHNG:JSON.stringify(data38.CHNG),
//     CHANGPercentage:JSON.stringify(data38.CHANGPercentage),
//     VOLUME:JSON.stringify(data38.VOLUME),
//     VALUE:JSON.stringify(data38.VALUE),
//     fiftyTwo_WH:JSON.stringify(data38.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data38.fiftyTwo_WL),
//     TODAY:JSON.stringify(data38.TODAY),
//     Date_Time:JSON.stringify(data38.Date_Time)
//   }
//   const DataObj39={
//     SYMBOL:JSON.stringify(data39.SYMBOL),
//     OPEN:JSON.stringify(data39.OPEN),
//     HIGH:JSON.stringify(data39.HIGH),
//     LOW:JSON.stringify(data39.LOW),
//     PREVCLOSE:JSON.stringify(data39.PREVCLOSE),
//     LTP:JSON.stringify(data39.LTP),
//     CHNG:JSON.stringify(data39.CHNG),
//     CHANGPercentage:JSON.stringify(data39.CHANGPercentage),
//     VOLUME:JSON.stringify(data39.VOLUME),
//     VALUE:JSON.stringify(data39.VALUE),
//     fiftyTwo_WH:JSON.stringify(data39.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data39.fiftyTwo_WL),
//     TODAY:JSON.stringify(data39.TODAY),
//     Date_Time:JSON.stringify(data39.Date_Time)
//   }  
//   const DataObj40={
//     SYMBOL:JSON.stringify(data40.SYMBOL),
//     OPEN:JSON.stringify(data40.OPEN),
//     HIGH:JSON.stringify(data40.HIGH),
//     LOW:JSON.stringify(data40.LOW),
//     PREVCLOSE:JSON.stringify(data40.PREVCLOSE),
//     LTP:JSON.stringify(data40.LTP),
//     CHNG:JSON.stringify(data40.CHNG),
//     CHANGPercentage:JSON.stringify(data40.CHANGPercentage),
//     VOLUME:JSON.stringify(data40.VOLUME),
//     VALUE:JSON.stringify(data40.VALUE),
//     fiftyTwo_WH:JSON.stringify(data40.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data40.fiftyTwo_WL),
//     TODAY:JSON.stringify(data40.TODAY),
//     Date_Time:JSON.stringify(data40.Date_Time)
//   } 
//   const DataObj41={
//     SYMBOL:JSON.stringify(data41.SYMBOL),
//     OPEN:JSON.stringify(data41.OPEN),
//     HIGH:JSON.stringify(data41.HIGH),
//     LOW:JSON.stringify(data41.LOW),
//     PREVCLOSE:JSON.stringify(data41.PREVCLOSE),
//     LTP:JSON.stringify(data41.LTP),
//     CHNG:JSON.stringify(data41.CHNG),
//     CHANGPercentage:JSON.stringify(data41.CHANGPercentage),
//     VOLUME:JSON.stringify(data41.VOLUME),
//     VALUE:JSON.stringify(data41.VALUE),
//     fiftyTwo_WH:JSON.stringify(data41.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data41.fiftyTwo_WL),
//     TODAY:JSON.stringify(data41.TODAY),
//     Date_Time:JSON.stringify(data41.Date_Time)
//   }
//   const DataObj42={
//     SYMBOL:JSON.stringify(data42.SYMBOL),
//     OPEN:JSON.stringify(data42.OPEN),
//     HIGH:JSON.stringify(data42.HIGH),
//     LOW:JSON.stringify(data42.LOW),
//     PREVCLOSE:JSON.stringify(data42.PREVCLOSE),
//     LTP:JSON.stringify(data42.LTP),
//     CHNG:JSON.stringify(data42.CHNG),
//     CHANGPercentage:JSON.stringify(data42.CHANGPercentage),
//     VOLUME:JSON.stringify(data42.VOLUME),
//     VALUE:JSON.stringify(data42.VALUE),
//     fiftyTwo_WH:JSON.stringify(data42.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data42.fiftyTwo_WL),
//     TODAY:JSON.stringify(data42.TODAY),
//     Date_Time:JSON.stringify(data42.Date_Time)
//   }
//   const DataObj43={
//     SYMBOL:JSON.stringify(data43.SYMBOL),
//     OPEN:JSON.stringify(data43.OPEN),
//     HIGH:JSON.stringify(data43.HIGH),
//     LOW:JSON.stringify(data43.LOW),
//     PREVCLOSE:JSON.stringify(data43.PREVCLOSE),
//     LTP:JSON.stringify(data43.LTP),
//     CHNG:JSON.stringify(data43.CHNG),
//     CHANGPercentage:JSON.stringify(data43.CHANGPercentage),
//     VOLUME:JSON.stringify(data43.VOLUME),
//     VALUE:JSON.stringify(data43.VALUE),
//     fiftyTwo_WH:JSON.stringify(data43.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data43.fiftyTwo_WL),
//     TODAY:JSON.stringify(data43.TODAY),
//     Date_Time:JSON.stringify(data43.Date_Time)
//   }
//   const DataObj44={
//     SYMBOL:JSON.stringify(data44.SYMBOL),
//     OPEN:JSON.stringify(data44.OPEN),
//     HIGH:JSON.stringify(data44.HIGH),
//     LOW:JSON.stringify(data44.LOW),
//     PREVCLOSE:JSON.stringify(data44.PREVCLOSE),
//     LTP:JSON.stringify(data44.LTP),
//     CHNG:JSON.stringify(data44.CHNG),
//     CHANGPercentage:JSON.stringify(data44.CHANGPercentage),
//     VOLUME:JSON.stringify(data44.VOLUME),
//     VALUE:JSON.stringify(data44.VALUE),
//     fiftyTwo_WH:JSON.stringify(data44.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data44.fiftyTwo_WL),
//     TODAY:JSON.stringify(data44.TODAY),
//     Date_Time:JSON.stringify(data44.Date_Time)
//   }
//   const DataObj45={
//     SYMBOL:JSON.stringify(data45.SYMBOL),
//     OPEN:JSON.stringify(data45.OPEN),
//     HIGH:JSON.stringify(data45.HIGH),
//     LOW:JSON.stringify(data45.LOW),
//     PREVCLOSE:JSON.stringify(data45.PREVCLOSE),
//     LTP:JSON.stringify(data45.LTP),
//     CHNG:JSON.stringify(data45.CHNG),
//     CHANGPercentage:JSON.stringify(data45.CHANGPercentage),
//     VOLUME:JSON.stringify(data45.VOLUME),
//     VALUE:JSON.stringify(data45.VALUE),
//     fiftyTwo_WH:JSON.stringify(data45.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data45.fiftyTwo_WL),
//     TODAY:JSON.stringify(data45.TODAY),
//     Date_Time:JSON.stringify(data45.Date_Time)
//   }
//   const DataObj46={
//     SYMBOL:JSON.stringify(data46.SYMBOL),
//     OPEN:JSON.stringify(data46.OPEN),
//     HIGH:JSON.stringify(data46.HIGH),
//     LOW:JSON.stringify(data46.LOW),
//     PREVCLOSE:JSON.stringify(data46.PREVCLOSE),
//     LTP:JSON.stringify(data46.LTP),
//     CHNG:JSON.stringify(data46.CHNG),
//     CHANGPercentage:JSON.stringify(data46.CHANGPercentage),
//     VOLUME:JSON.stringify(data46.VOLUME),
//     VALUE:JSON.stringify(data46.VALUE),
//     fiftyTwo_WH:JSON.stringify(data46.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data46.fiftyTwo_WL),
//     TODAY:JSON.stringify(data46.TODAY),
//     Date_Time:JSON.stringify(data46.Date_Time)
//   }
//   const DataObj47={
//     SYMBOL:JSON.stringify(data47.SYMBOL),
//     OPEN:JSON.stringify(data47.OPEN),
//     HIGH:JSON.stringify(data47.HIGH),
//     LOW:JSON.stringify(data47.LOW),
//     PREVCLOSE:JSON.stringify(data47.PREVCLOSE),
//     LTP:JSON.stringify(data47.LTP),
//     CHNG:JSON.stringify(data47.CHNG),
//     CHANGPercentage:JSON.stringify(data47.CHANGPercentage),
//     VOLUME:JSON.stringify(data47.VOLUME),
//     VALUE:JSON.stringify(data47.VALUE),
//     fiftyTwo_WH:JSON.stringify(data47.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data47.fiftyTwo_WL),
//     TODAY:JSON.stringify(data47.TODAY),
//     Date_Time:JSON.stringify(data47.Date_Time)
//   }
//   const DataObj48={
//     SYMBOL:JSON.stringify(data48.SYMBOL),
//     OPEN:JSON.stringify(data48.OPEN),
//     HIGH:JSON.stringify(data48.HIGH),
//     LOW:JSON.stringify(data48.LOW),
//     PREVCLOSE:JSON.stringify(data48.PREVCLOSE),
//     LTP:JSON.stringify(data48.LTP),
//     CHNG:JSON.stringify(data48.CHNG),
//     CHANGPercentage:JSON.stringify(data48.CHANGPercentage),
//     VOLUME:JSON.stringify(data48.VOLUME),
//     VALUE:JSON.stringify(data48.VALUE),
//     fiftyTwo_WH:JSON.stringify(data48.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data48.fiftyTwo_WL),
//     TODAY:JSON.stringify(data48.TODAY),
//     Date_Time:JSON.stringify(data48.Date_Time)
//   }
//   const DataObj49={
//     SYMBOL:JSON.stringify(data49.SYMBOL),
//     OPEN:JSON.stringify(data49.OPEN),
//     HIGH:JSON.stringify(data49.HIGH),
//     LOW:JSON.stringify(data49.LOW),
//     PREVCLOSE:JSON.stringify(data49.PREVCLOSE),
//     LTP:JSON.stringify(data49.LTP),
//     CHNG:JSON.stringify(data49.CHNG),
//     CHANGPercentage:JSON.stringify(data49.CHANGPercentage),
//     VOLUME:JSON.stringify(data49.VOLUME),
//     VALUE:JSON.stringify(data49.VALUE),
//     fiftyTwo_WH:JSON.stringify(data49.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data49.fiftyTwo_WL),
//     TODAY:JSON.stringify(data49.TODAY),
//     Date_Time:JSON.stringify(data49.Date_Time)
//   }  
  const DataObj50={
//     SYMBOL:JSON.stringify(data50.SYMBOL),
//     OPEN:JSON.stringify(data50.OPEN),
//     HIGH:JSON.stringify(data50.HIGH),
//     LOW:JSON.stringify(data50.LOW),
//     PREVCLOSE:JSON.stringify(data50.PREVCLOSE),
//     LTP:JSON.stringify(data50.LTP),
//     CHNG:JSON.stringify(data50.CHNG),
//     CHANGPercentage:JSON.stringify(data50.CHANGPercentage),
//     VOLUME:JSON.stringify(data50.VOLUME),
//     VALUE:JSON.stringify(data50.VALUE),
//     fiftyTwo_WH:JSON.stringify(data50.fiftyTwo_WH),
//     fiftyTwo_WL:JSON.stringify(data50.fiftyTwo_WL),
//     TODAY:JSON.stringify(data50.TODAY),
//     Date_Time:JSON.stringify(data50.Date_Time)
  }  


// csvData.forEach(function (arrayItem) {})
//   try {
//     const insertedData =  Data.insertMany([
//       DataObj0,DataObj1,DataObj2,DataObj3,DataObj4,DataObj5,DataObj6,DataObj7,DataObj8,DataObj9,DataObj10,
//       DataObj11,DataObj12,DataObj13,DataObj14,DataObj15,DataObj16,DataObj17,DataObj18,DataObj19,DataObj20,
//       DataObj21,DataObj22,DataObj23,DataObj24,DataObj25,DataObj26,DataObj27,DataObj28,DataObj29,DataObj30,
//       DataObj31,DataObj32,DataObj33,DataObj34,DataObj35,DataObj36,DataObj37,DataObj38,DataObj39,DataObj40,
//       DataObj41,DataObj42,DataObj43,DataObj44,DataObj45,DataObj46,DataObj47,DataObj48,DataObj49,DataObj50
//     ]);
//     res.status(201).send({message: `Data inserted successfully`});
// }catch(err){
//     console.log("Something went wrong while saving to DB", err.message);
//     res.status(500).send({message: "Some internal error while inserting the element",err});
// }});
// }
// module.exports={scrapData}