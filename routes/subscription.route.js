const express = require('express');
const routes = express.Router();
const subscriptionController = require('../controller/Subscription.controller');
const freeSubscriptionController = require('../controller/freeSub.controller');
const  ValidateSubscription = require('../middleware/verifySubscription');

routes.post('/App/api/v1/createSubscription',[ValidateSubscription.ValidateSubscription],subscriptionController.createSubscription );

routes.get ('/App/api/v1/getAllPlans',subscriptionController.getAllPlans);

routes.get ('/App/api/v1/getMonthlyInr',subscriptionController.getMonthlyInr);

routes.get ('/App/api/v1/getYearlyInr',subscriptionController.getYearlyInr);

routes.get ('/App/api/v1/getAllPlans/:id',subscriptionController.FindSubscriptionById);

routes.put('/App/api/v1/updatePlan/:id', subscriptionController.updatePlans);

routes.delete('/App/api/v1/deletePlan/:id', subscriptionController.deletePlans);

routes.put('/App/api/v1/get/subscription',subscriptionController.userSubscribe);

//**************** free subscription routes *****************//

routes.post('/App/api/v1/create-free/Subscription',[ValidateSubscription.ValidateSubscription],freeSubscriptionController.postFreeSub );

routes.put('/App/api/v1/update/free-Plan/:id', freeSubscriptionController.updateFreePlans);

routes.get ('/App/api/v1/get-free/Plan/:id',freeSubscriptionController.FindSubscriptionById);




module.exports = {SubscriptionRoutes : routes}
