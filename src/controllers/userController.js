const User = require('../model/userModel');
const userService = require('../service/userService');

class AuthController {
        async postRegister(req,res){
            try {
                const data = req.body;
                const user = await userService.createUser(data);
                console.log(user)
                await user.save();
                const token = await user.generateAuthToken();
                res.status(201).send({
                    success: true,
                    message:"User Register Successfully",
                    data:user,
                    token
                })
                
            } catch (error) {
                console.log(error)
                res.status(401).send('userCannot be created')
            }
          
            
        }

        async findUser(req,res){
            try {
               
                const {fullname, phonenumber} = req.body;
                const verifyData = await userService.findUser({phonenumber});
                if(!verifyData){
                    res.status(404).send({
                        sucess: false,
                        message: 'No user'
                    });
                    console.log('No user found')
                }
                const token = await verifyData.generateAuthToken();
                res.status(200).send({
                    sucess: true,
                    message: 'Successfully logged in',
                    data: verifyData,
                    token
    
                })  
            } catch (error) {
                // res.status(404).send({
                //     sucess: false,
                //     message: 'No User with this phone number',
                  
                // })
            }
         

        }
}

module.exports = new AuthController();