const moment = require ('moment');
// const momentTime= moment()
// let crTime = moment().format('hh.mm')
// let timeDelay = moment().subtract(10,"m").format('hh.mm')
// console.log(`crTime: ${crTime}`);
// console.log(`timeDelay: ${timeDelay}`);

// const time = moment().subtract(10,"min").format('hh.mm')
// console.log("Time",time)
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

var jsonexport = require('jsonexport');
const fs = require('fs')
var contacts = [        {
    "_id": "6485a6f89ecb593c2820dd93",
    "email": "developerakshayjadhav@gmail.com",
    "name": "Akshay Jadhav",
    "photo": "https://lh3.googleusercontent.com/a/AAcHTtfGVpZyPX1aAYiKpgbbUJcaP7MtlJ9X5yCSvvcL=s96-c",
    "isActive": false,
    "isBlocked": false,
    "createdAt": "2023-06-11T00:00:00.000Z",
    "updatedAt": "June 11, 2023",
    "__v": 0
},
{
    "_id": "6486b7f7294e611be5294adf",
    "email": "akkijadhav079@gmail.com",
    "name": "Scribble Studio",
    "photo": "https://lh3.googleusercontent.com/a/AAcHTtfTU6MlILp_meOEaRZ036DjE9V0G3u5L1xbpbzncA=s96-c",
    "isActive": false,
    "isBlocked": false,
    "createdAt": "2023-06-11T00:00:00.000Z",
    "updatedAt": "June 11, 2023",
    "__v": 0,
    "SubscriptionId": {
        "_id": "648576ee753482815ca88434",
        "name": "Basic",
        "price": 100,
        "duration": "1",
        "description": "Include only callls",
        "createdAt": "2023-06-11T00:00:00.000Z",
        "updatedAt": "2023-06-11T00:00:00.000Z",
        "__v": 0
    }
},
{
    "_id": "6489691dc9d4d23255739642",
    "email": "sakibde01@gmail.com",
    "name": "1223456789",
    "password": "$2b$16$pyjdTj1LCnAzZrsnh4zyH.S0t4QGhrbKTk6cK2dkzTO59SxYLtWSK",
    "photo": "http://localhost/public/1686727086208.jpeg",
    "isActive": false,
    "isBlocked": false,
    "createdAt": "2023-06-13T18:30:00.000Z",
    "updatedAt": "June 14, 2023",
    "__v": 0,
    "firebaseToken": "adsfaegag451600azd"
},
{
    "_id": "64899172ce9b2c64cf683a2f",
    "email": "akshay@test.com",
    "name": "Akshay",
    "password": "$2b$10$tMKauUBmeyDaWcrNgmQxI.WPav3xa.AkgAecj1Ku2kZkQHnxmlJq6",
    "photo": "http://api.niftyleveltracker.in/public/defaultProfile.png",
    "isActive": false,
    "isBlocked": false,
    "createdAt": "2023-06-14T00:00:00.000Z",
    "updatedAt": "June 14, 2023",
    "__v": 0
},
{
    "_id": "648991f9ce9b2c64cf683a39",
    "email": "akkoo@test.com",
    "name": "akkoo",
    "password": "$2b$10$NTJvLAHf3EB2TmsBszPE...qfXXtB.f7FiSIrVVBn.G1Fs7Lb7lrG",
    "photo": "http://api.niftyleveltracker.in/public/defaultProfile.png",
    "isActive": false,
    "isBlocked": false,
    "createdAt": "2023-06-14T00:00:00.000Z",
    "updatedAt": "June 14, 2023",
    "__v": 0
},
{
    "_id": "6489929fce9b2c64cf683a42",
    "email": "test@test.com",
    "name": "test",
    "password": "$2b$10$crsMwzEx3iCEK9yMBeDilON6VuIUibEgvLFsa74.CCV5cVssnO2Ja",
    "photo": "http://api.niftyleveltracker.in/public/defaultProfile.png",
    "isActive": false,
    "isBlocked": false,
    "createdAt": "2023-06-14T00:00:00.000Z",
    "updatedAt": "June 14, 2023",
    "__v": 0
}];

jsonexport(contacts,function(err, csv){
    if(err) return console.log(err);
    fs.writeFile('msg.txt',csv,err =>{
    console.log(csv);
});
});