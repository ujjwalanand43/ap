const Images = require('../model/image');

// const config = require('cloudinary');
// const uploader = require('cloudinary');

class imagesController{
        async postImages(req,res){
            try {
                console.log(req.files[0].path)
                    const createImages = new Images({
                        title: req.body.title,
                        description: req.body.description,
                        images: req.files[0].path,
                    })
                     
                 

                    await createImages.save();



                    res.status(201).send({
                        sucess:true,
                        message:'Images inserted successfully',
                        data:createImages
                    })

            } catch (error) {
                console.log(error)
                res.status(500).send({
                    sucess: false,
                    message: 'Not Able to upload images'
                })
            }
        }
        async getImages(req,res){
            try {
                const fetchData = await Images.find({});
                res.status(200).send({
                    sucess:true,
                    data:fetchData
                })
                
            } catch (error) {
                res.status(500).send({
                    success: false,
                    message: "Not able to fetch Data"
                }) 
            }
        }
    }


    module.exports = new imagesController();