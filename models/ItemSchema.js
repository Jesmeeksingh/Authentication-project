const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemdb = new mongoose.Schema({
    OwnerName:{
        type:String,
        required:true
    },
    ProductName:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Available_Quantity:{
        type:Number,
        required:true
    },
    Company:{
        type:String
    }
})