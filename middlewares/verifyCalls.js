const ValidateCalls = (req, res, next) =>{
    const stockObj = {
        call: req.body.call,
        put: req.body.put,
        targetPrice: req.body.targetPrice,
        stopLoss:req.body.stopLoss
    }
    if (!stockObj.call){
        return res.status(403).json({
            message: "Call Value Is  Require"
        })
    }    else if (!stockObj.put ){
        return res.status(403).json({
            message: " Put Value Is Require"
        })
    }
    else if (!stockObj.targetPrice ){
        return res.status(403).json({
            message: " TargetPrice Value Is Require"
        })
    }  else if (!stockObj.stopLoss ){
        return res.status(403).json({
            message: " StopLoss Value Is Require"
        })
    }
    else{
        next();
}
}

module.exports = {
    ValidateCalls : ValidateCalls
}