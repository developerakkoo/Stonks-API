const {UserRoutes} =require('./user.route')
const {StockRoutes} = require('./stock.route')
const {SubscriptionRoutes} = require('./subscription.route')
const {ScrapDataRoutes}= require('../routes/scrapData.route')
const {PaymentRoute } = require('../routes/payment.route')
const {GetStocksRoute} = require('../routes/getStocks.route')


module.exports = {
    UserRoutes,
    StockRoutes,
    SubscriptionRoutes,
    ScrapDataRoutes,
    GetStocksRoute,
    PaymentRoute
}