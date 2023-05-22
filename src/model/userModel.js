const mongoose = require('mongoose');
const { config } = require('dotenv');
require('dotenv').config();
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    phonenumber:{
        type:Number,
        required: true
    },
    tokens: [{
        token: {
            type: String,
        }

    }]
},{
timestamps:true
})

UserSchema.methods.generateAuthToken = async function(next){
    const user = this;
    try {
        const jwtToken  = jwt.sign({
            _id: user._id.toString(),
        },process.env.TOKEN_SECRET,{
            expiresIn: '1hr'
        });
        user.tokens = user.tokens.concat({ token: jwtToken });
        await user.save();
        return jwtToken;
        next();
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


const User = new mongoose.model('User', UserSchema);
module.exports = User;