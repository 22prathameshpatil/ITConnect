const SERVICE = require('../models/service-model')

const handleService = async(req,res,next)=>{
try {
    const response = await SERVICE.find({});
    if (!response) {
        res.status(200).json({"message":"Service not found"});
        return;
    }
    res.status(200).json({response});
} catch (error) {
    next(error)
}
}

module.exports = {
    handleService
}