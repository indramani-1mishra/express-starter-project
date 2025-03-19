const express = require('express');
const { userrouter } = require('./usersrouter');
const v1router= express.Router();

v1router.use('/users',userrouter);


module.exports={
    v1router
}