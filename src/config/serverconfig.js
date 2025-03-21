const dotenv = require('dotenv');
dotenv.config();

module.exports = {
   PORT: process.env.PORT,
   DB_URL:process.env.DB_URL,
   JWT_SECRET_KEY:process.env.SECRET_KEY,
   EXPIRE_TIME:process.env.EXPIRE_TIME,
   CLOUDINARY_NAME:process.env.CLOUDINARY_NAME,
   CLOUDINARY_KEY:process.env.CLOUDINARY_KEY,
   CLOUDINARY_SECRET_KEY:process.env.CLOUDINARY_SECRET_KEY,


};

