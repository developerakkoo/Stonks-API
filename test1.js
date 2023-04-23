// const axios = require('axios');
// let data = JSON.stringify({
//   "SYMBOL": "NIFTY 50",
//   "OPEN": "17,863.00",
//   "HIGH": "17,863.00",
//   "LOW": "17,574.05",
//   "PREVCLOSE": "17,828.00",
//   "LTP": "17,702.75",
//   "CHNG": "-125.25",
//   "CHANGPercentage": "-0.7",
//   "VOLUME": "34,83,62,893",
//   "VALUE": "34,28,876.14",
//   "fiftyTwo_WH": "18,887.60",
//   "fiftyTwo_WL": "18,887.60",
//   "TODAY": "13-Apr-202217-Mar-2023Past 365 Days365 d % chngPast 30 Days30 d % chng2.024.26",
//   "Date": "4/18/2023",
//   "Time": "3:07 PM"
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://localhost:8000/App/api/v1/scrapData',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
