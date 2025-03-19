const express= require('express');
const { createuserc } = require('../../controller/v1controller/usercontroller');

const userrouter =express.Router();

userrouter.post("/",createuserc);

module.exports={
    userrouter
}