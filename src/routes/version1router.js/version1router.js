const express = require('express');
const { userrouter } = require('./usersrouter');
const { loginrouter } = require('./loginrouter');
const { productrouter } = require('./productrouter');
const v1router= express.Router();

v1router.use('/users',userrouter);
v1router.use('/login',loginrouter);
v1router.use('/products',productrouter)


module.exports={
    v1router
}