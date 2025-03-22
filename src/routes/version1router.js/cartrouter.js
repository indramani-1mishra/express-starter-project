const express =require('express');
const { getcart } = require('../../controller/v1controller/cartcontroller');
const { isloggedin } = require('../../validetor/loginvalidetor');
const cartrouter= express.Router();

cartrouter.get("/",isloggedin,getcart);

module.exports=cartrouter;