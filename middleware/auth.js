module.exports = {
    ensureAuth: function( req, res, next) {
        if(req.isAuthenticated()){
            return next()
        }else{
            res.redirect('/')
        }
    },
    ensureGest : function (req, res, next){
        if(req.isAuthenticated()){
            res.redirect('/Dashboard')
        }else{
            return next()
        }
    },
}