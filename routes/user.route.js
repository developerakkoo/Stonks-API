const express = require('express');
const routes = express.Router();
const userController =  require('../controller/user.controller');
const verifyUser = require('../middleware/verifyUser')

routes.post('/App/api/v1/create',[verifyUser.ValidateUsers],userController.createUser);
routes.get('/App/api/v1/getAll',userController.FindAll);
routes.get('/App/api/v1/UserCount',userController.UserCount);
//routes.get('/App/api/v1/TotalActiveUser',userController.TotalActiveUser);
routes.get('/App/api/v1/getAll/:id', userController.FindById);
routes.put('/App/api/v1/update/:id',userController.UpdateUser);
routes.delete('/App/api/v1/delete/:id', userController.deleteUser);


routes.put('/App/api/v1/get/subscription',userController.userSubscribe);

module.exports = {UserRoutes : routes}
