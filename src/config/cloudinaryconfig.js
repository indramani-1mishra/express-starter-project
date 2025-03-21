const serverconfig = require('./serverconfig');
//const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET_KEY } = require('./serverconfig')

const cloudinary= require('cloudinary').v2

  const {CLOUDINARY_NAME,CLOUDINARY_KEY,CLOUDINARY_SECRET_KEY}= serverconfig;

cloudinary.config({
    cloud_name:CLOUDINARY_NAME,
    api_key:CLOUDINARY_KEY,
    api_secret:CLOUDINARY_SECRET_KEY,
});

module.exports=cloudinary;