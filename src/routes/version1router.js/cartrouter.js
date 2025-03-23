const express =require('express');
const { getcart, addtocart, removetocartc, clearcartc } = require('../../controller/v1controller/cartcontroller');
const { isloggedin } = require('../../validetor/loginvalidetor');
const cartrouter= express.Router();

cartrouter.get("/",isloggedin,getcart);
cartrouter.post('/:id',isloggedin,addtocart);
cartrouter.delete("/:id",isloggedin,removetocartc);
cartrouter.delete('/',isloggedin,clearcartc);

module.exports=cartrouter;