const express = require('express');
const serverConfig = require('./config/serverconfig.js');
const  {connectdb}  = require('./config/dbconfig.js');
const { apirouter } = require('./routes/apiroutes.js');
const cookieParser = require('cookie-parser');
const { isloggedin } = require('./validetor/loginvalidetor.js');
const uploader = require('./middleware/multermiddleware.js');
const cloudinary = require('./config/cloudinaryconfig.js');  
const fs= require('fs/promises')
//const cloudinary = require('./config/cloudinary');  // ✅ Correct Import


const { PORT } = serverConfig;  

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apirouter);

app.get('/ping', isloggedin, (req, res) => {
    return res.json({ message: "pong" });
});


 

app.listen(PORT, () => {
    console.log(`Server running on the port: ${PORT}`);
    connectdb();
});
