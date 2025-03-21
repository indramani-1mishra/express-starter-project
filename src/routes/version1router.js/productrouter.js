const express = require('express');
const { addproductc, getproductbyidc, deletproductbyidc, updateproductc, fetchallproduct } = require('../../controller/v1controller/addproduct');
const uploader = require('../../middleware/multermiddleware');

const productrouter= express.Router();

productrouter.post('/',uploader.single('image'),addproductc);
productrouter.get('/:id',getproductbyidc);
productrouter.delete('/:id',deletproductbyidc);
productrouter.put('/:id',updateproductc);
productrouter.get('/',fetchallproduct);

module.exports={
    productrouter
}