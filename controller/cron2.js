const cron = require('node-cron');
const Data = require('../model/scraperData.model');
const nifty50Data = require('../model/nifty50Data');

cron.schedule('0 0 * * *', async () => { // '0 0 * * *' represents midnight every night
    try {
        await Data.deleteMany();
        await nifty50Data.deleteMany();
        console.log('Data cleared successfully.');
    } catch (error) {
        console.error('Error clearing data:', error);
    }
});