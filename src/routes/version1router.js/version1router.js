const express = require('express');
const { userrouter } = require('./usersrouter');
const { loginrouter } = require('./loginrouter');
const v1router= express.Router();

v1router.use('/users',userrouter);
v1router.use('/login',loginrouter);


module.exports={
    v1router
}