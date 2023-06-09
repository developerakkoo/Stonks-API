const express = require('express');
const routes = express.Router();
const subscriptionController = require('../controller/Subscription.controller')
const  ValidateSubscription = require('../middleware/verifySubscription')

routes.post('/App/api/v1/createSubscription',[ValidateSubscription.ValidateSubscription],subscriptionController.createSubscription );

routes.get ('/App/api/v1/getAllPlans',subscriptionController.getAllPlans);

routes.get ('/App/api/v1/getMonthlyInr',subscriptionController.getMonthlyInr);

routes.get ('/App/api/v1/getYearlyInr',subscriptionController.getYearlyInr);

routes.get ('/App/api/v1/getAllPlans/:id',subscriptionController.FindSubscriptionById);

routes.put('/App/api/v1/updatePlan/:id', subscriptionController.updatePlans);

routes.delete('/App/api/v1/deletePlan/:id', subscriptionController.deletePlans);

module.exports = {SubscriptionRoutes : routes}
