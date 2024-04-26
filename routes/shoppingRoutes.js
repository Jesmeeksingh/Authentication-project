const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('shopping')
})
router.post('/',(req,res,next)=>{
    console.log(req.body);
    next();
})
module.exports = router
