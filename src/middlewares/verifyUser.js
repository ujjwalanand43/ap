const { config } = require('dotenv')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

// const auth = async(req, res, next) => {
   
//     try {
//         const token = req.header('Authorization').replace('Bearer ','');
//         const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//         console.log(decodedToken,"your decoded token")
//         const user = await User.findOne({_id:decodedToken._id, 'tokens.token': token});
//         console.log(user,"your  user")
//         if(!user){
//             res.status(404).send('No user found');
//         }
//         req.token = token;
//         req.user = user;
//         next();
//     } catch (error) {
//         console.log(error)
//         res.status(401).send({ error: 'Please Login/Signup to continue' })
//     }

// }


const auth = async(req,res,next)=>{
    try {
       const token = req.header('Authorization').replace('Bearer ','')
       const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET)
       
       const user = await User.findOne({_id:decodedToken._id,'tokens.token': token})
       if(!user){
        res.status(404).send('No User Found')

       }

       req.token = token;
       req.user = user;
       next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: 'Please Login/Signup to continue' })
    }
}

module.exports = auth;