const errorMiddleware = (error,req,res,next) =>{
    error.message = error.message || " Internal sever Error ";
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({message:error.message})
}


module.exports={errorMiddleware}