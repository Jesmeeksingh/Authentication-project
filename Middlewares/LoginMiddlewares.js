const customer =  require('../models/CustomerSchema')
const jwt = require('jsonwebtoken')

exports.isUserValid = async (req,res,next)=>{
    try {
        const {email} = req.body;
        const foundCustomer = await customer.findOne({Email:email})
        if(!foundCustomer){
            console.log('invalid customer');
        }
        const token = await jwt.sign({_id:foundCustomer._id.toString()},"Thisisatopsecretshieldsecretkey");
    
        res.json({customerId:foundCustomer._id,token});
        next()
    } catch (error) {
        res.status(500).send('server error')
    }
}