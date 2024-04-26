const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const customerdb = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    CartItems: [
        {
            itemName:String,
            quantity:Number,
            price:Number,
            ItemId:{
                type:Schema.Types.ObjectId,
                ref:'Item'
            }

        }
    ],
    Tokens:[
        {
            token:{
                type:String,
                required:true
            }

        }
    ]
});

customerdb.methods.generateAuthToken = async function(){
    try {
        const token = await jwt.sign({_id:this._id.toString()},"Thisisatopsecretshieldsecretkey");
        this.Tokens = this.Tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
        console.log("error = "+error);
    }
}

const customer = mongoose.model('customer',customerdb);
module.exports = customer;