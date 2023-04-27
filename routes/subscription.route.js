const express = require('express');
const routes = express.Router();
const subscriptionController = require('../controller/Subscription.controller')

routes.get ('/App/api/v1/getAllPlans',subscriptionController.getAllPlans);
routes.get ('/App/api/v1/getMonthlyInr',subscriptionController.getMonthlyInr);
routes.get ('/App/api/v1/getYearlyInr',subscriptionController.getYearlyInr);
routes.get ('/App/api/v1/getAllPlans/:id',subscriptionController.FindSubscriptionById);
routes.post('/App/api/v1/createSubscription',subscriptionController.createSubscription );
routes.put('/App/api/v1/updatePlan/:id', subscriptionController.updatePlans);
routes.delete('/App/api/v1/deletePlan/:id', subscriptionController.deletePlans);

module.exports = {SubscriptionRoutes : routes}
