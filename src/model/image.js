const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken');
const { config } = require('dotenv');
require('dotenv').config()
const ImagesSchema = new mongoose.Schema({
    title: {
        type:String,
    },
    images: [{
        type:String,
        required:true
    }]
},{
    timestamps: true
})





const Images = new mongoose.model('Hideimage', ImagesSchema);
module.exports = Images;