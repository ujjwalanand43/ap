const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')
const imagesController = require('../controllers/imageController')

// for images

router.post('/images',upload.array('images'),imagesController.postImages)
router.get('/images',imagesController.getImages)



module.exports = router