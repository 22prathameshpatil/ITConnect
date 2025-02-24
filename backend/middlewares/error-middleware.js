const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    const extradetails = err.extraDetails || "Error from backend";

    return res.status(status).json({ 
      message,
      extradetails,
    })
}


module.exports = errorMiddleware;
