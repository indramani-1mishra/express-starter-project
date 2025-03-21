const multer = require('multer');
const path= require('path');


const strogeconfigration =multer.diskStorage({
    destination:(req,file,next)=>
    {
        next(null,'uploads/')
        
    },
    filename:(req,file,next)=>
    {
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
})




const uploader = multer({
   storage:strogeconfigration
});

module.exports = uploader;
