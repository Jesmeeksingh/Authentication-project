// userController.js
const customer =  require('../models/CustomerSchema')

exports.loginpage = async(req, res) => {
    await res.render('login');
};
exports.logindone = (req,res) =>{
    res.send('logged in')
}
exports.signuppage = (req,res)=>{
    res.render('signup')
}
exports.signupdone = (req,res)=>{
    res.send('signed up!')
}
exports.CreateUserInDB = async (req,res)=>{
    const { password, username, email } = req.body;
    const newCustomer = new customer({
        Username:username,
        Email:email,
        Password:password
    });
    await newCustomer.generateAuthToken();
    await newCustomer.save();
    // res.send('Signed in Successfully')
    res.render('login')
}
