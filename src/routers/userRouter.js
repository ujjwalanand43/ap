const express  = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/verifyUser')
router.post('/register',userController.postRegister);
router.post('/login',userController.findUser);
router.get('/',auth,(req,res)=>{
    res.send('Token Verified')
})

module.exports = router;