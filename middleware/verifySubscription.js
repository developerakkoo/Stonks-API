const ValidateSubscription = (req, res, next) =>{
    const subscriptionObj = {
        name: req.body.name,
        price: req.body.price,
        duration: req.body.duration,
        description:req.body.description
    }
    if (!subscriptionObj.name){
        return res.status(403).json({
            message: "Subscription Name Is  Require"
        })
    }    else if (!subscriptionObj.price ){
        return res.status(403).json({
            message: " Subscription Price is Require"
        })
    }
    else if (!subscriptionObj.duration ){
        return res.status(403).json({
            message: " Subscription Duration Is Require"
        })
    }  else if (!subscriptionObj.description ){
        return res.status(403).json({
            message: " Subscription Description Is Require"
        })
    }
    else{
        next();
}
}

module.exports = {
    ValidateSubscription : ValidateSubscription
}