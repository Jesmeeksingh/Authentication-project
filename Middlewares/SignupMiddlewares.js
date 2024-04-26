const customer =  require('../models/CustomerSchema')

exports.isValidPasswordLength = (req,res,next)=>{
    const {password} = req.body;
    return new Promise((resolve,reject)=>{
        if(password.length>=8 && password.length<=15){
            console.log('password length is valid');
            resolve();
        }
        else{
            console.log('password length not valid');
            reject('password length not valid');
        }
    })
    .then(()=>{
        next();
    })
    .catch(error=>{
        res.status(400).send(error);
    })
}

exports.ispasswordconfirmed = (req,res,next)=>{
    const { password, repassword} = req.body;
    return new Promise((resolve,reject)=>{
        if(password === repassword){
            console.log('password is correct!');
            resolve();
        }else{
            console.log('enter password correctly');
            reject('password didnt confirmed');
        }
    })
    .then(()=>{
        next()    
    })
}; 