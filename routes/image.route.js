const express = require('express');
const routes = express.Router();
const ImageController = require('../controller/image.controller');
const upload = require('../middleware/upload');


routes.post('/add/image',upload.single("image"),ImageController.postImage);

routes.put('/update/image/:imageId',upload.single("image"),ImageController.UpdateImage);


routes.get('/getAll/images',ImageController.getAllImage);

routes.get('/get/image/:imageId',ImageController.getImageById);

routes.get('/getStripe',ImageController.get);



module.exports={ImageRoutes:routes}