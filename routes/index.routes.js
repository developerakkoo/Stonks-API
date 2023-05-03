const {UserRoutes} =require('./user.route')
const {StockRoutes} = require('./stock.route')
const {SubscriptionRoutes} = require('./subscription.route')
const {ScrapDataRoutes}= require('../routes/scrapData.route')
const {PaymentRoute } = require('../routes/payment.route')


module.exports = {
    UserRoutes,
    StockRoutes,
    SubscriptionRoutes,
    ScrapDataRoutes,
    PaymentRoute
}