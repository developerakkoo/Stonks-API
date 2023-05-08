const ValidateCalls = (req, res, next) =>{
    const stockObj = {
        call: req.body.call,
        put: req.body.put,
        targetPrice: req.body.targetPrice,
        stopLoss:req.body.stopLoss
    }
    if (!stockObj.call){
        return res.status(403).json({
            message: "Call Value is  require"
        })
    }    else if (!stockObj.put ){
        return res.status(403).json({
            message: " put Value is require"
        })
    }
    else if (!stockObj.targetPrice ){
        return res.status(403).json({
            message: " targetPrice Value is require"
        })
    }  else if (!stockObj.stopLoss ){
        return res.status(403).json({
            message: " stopLoss Value is require"
        })
    }
    else{
        next();
}
}

module.exports = {
    ValidateCalls : ValidateCalls
}