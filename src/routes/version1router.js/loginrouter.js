const express = require('express');
const { loginc } = require('../../controller/v1controller/logincontroler');
const loginrouter= express.Router();

loginrouter.post('/',loginc);

module.exports={
    loginrouter
}