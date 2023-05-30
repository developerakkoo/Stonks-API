const moment = require ('moment')
// const momentTime= moment()
// let crTime = moment().format('hh.mm')
// let timeDelay = moment().subtract(10,"m").format('hh.mm')
// console.log(`crTime: ${crTime}`);
// console.log(`timeDelay: ${timeDelay}`);

// const time = moment().subtract(10,"min").format('hh.mm')
// console.log("Time",time)
console.log(moment().format('DD-MM-YYYY'))
const time1 = moment().add(1,"day").format('LLLL')
const t =moment().add(5, 'days').calendar();  
console.log("Time1",time1)
// let m3 = moment(moment(crTime,"hh:mm").diff(moment(m2,"hh:mm"))).format("hh:mm"); 
// console.log(m3);
// let n=11.04
// console.log(n.toFixed(2))

// console.log(`current time ${crTime}`);
// momentTime.subtract(10,"minute")
// console.log(`manipulated time ${momentTime.toString()}`)

// console.log(moment().format('LT'));

/* 
                this.terminate(new Errors_js_1.TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`));
                               ^

TimeoutError: Waiting for selector `#equityStockTable` failed: Waiting failed: 30000ms exceeded
    at Timeout.<anonymous> (C:\Users\sakib\OneDrive\Desktop\NSESCRAPPER-STOCKS\node_modules\puppeteer-core\lib\cjs\puppeteer\common\WaitTask.js:63:32)
    at listOnTimeout (node:internal/timers:555:17)
    at processTimers (node:internal/timers:498:7)
*/