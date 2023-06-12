const express = require('express');
const routes = express.Router();
const passport = require('passport')
const {ensureAuth,ensureGest} = require ('../middleware/auth')



routes.get('/',ensureGest,(req,res) =>{
    res.render("index")
})

routes.get('/Dashboard', ensureAuth,(req,res) =>{
    res.render("Dashboard")
})









//logout user

routes.get('/logout',function(req,res,next){
    req.logOut(function(err){
        if (err) { return next(err); }
        res.redirect('/')
    })
    
    
})



module.exports = {authRoute : routes}