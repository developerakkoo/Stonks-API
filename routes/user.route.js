const express = require('express');
const routes = express.Router();
const userController =  require('../controller/user.controller');
const verifyUser = require('../middleware/verifyUser');
const uploadImage = require('../middleware/upload');
routes.post('/App/api/v1/create/user',[verifyUser.ValidateUsers],userController.createUser);

routes.post('/App/api/v1/login/user',userController.loginUser);

routes.put('/App/api/v1/add/userImage/:userId',uploadImage.single("image"),userController.postImage);

routes.get('/App/api/v1/getAll/user',userController.FindAll);

routes.get('/App/api/v1/UserCount',userController.UserCount);
//routes.get('/App/api/v1/TotalActiveUser',userController.TotalActiveUser);

routes.get('/App/api/v1/get/user/:id', userController.FindById);

routes.put('/App/api/v1/update/user/:id',userController.UpdateUser);

routes.delete('/App/api/v1/delete/user/:id', userController.deleteUser);



routes.put('/App/api/v1/update/fireBaseToken/:userId',userController.addFireBaseId);

routes.get('/App/api/v1/export-to-excel/userData',userController.exportData);


routes.get('/App/api/v1/user-forgot-password',(req,res,next)=>{
    res.render('forgot-password');
});

routes.post('/App/api/v1/user-forgot-password',userController.forgotPassword);

routes.get('/rest-password/:id/:token',userController.getResetPassword);

routes.post('/rest-password/:id/:token',userController.ResetPassword);

//verify email

routes.get('/verify-email/:userId/:token',userController.getVerifyEmail)

routes.post('/verify-email/:userId/:token',userController.verifyEmail);

module.exports = {UserRoutes : routes}
