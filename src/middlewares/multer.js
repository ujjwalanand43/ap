const multer = require("multer");
const path = require("path");
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require("multer-storage-cloudinary");
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
          folder: "DEV",
        },
      });

      
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        var ext = path.extname(file.originalname);
        if (
            ext !== ".png" &&
            ext !== ".jpg" &&
            ext !== ".gif" &&
            ext !== ".jpeg" &&
            ext !== ".webp" &&
            ext !== ".pdf"
        ) {
            return callback("Only png, jpg, gif and jpeg Images are allowed!");
        }
        callback(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
});

module.exports = upload;
