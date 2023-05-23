const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')
const imagesController = require('../controllers/imageController')
const auth = require('../middlewares/verifyUser')

// for images

router.post('/images',auth,upload.array('images'),imagesController.postImages)
router.get('/images',auth,imagesController.getImages)



module.exports = router