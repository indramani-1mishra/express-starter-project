const express = require('express');
const { v1router } = require('./version1router.js/version1router');

const apirouter= express.Router();

apirouter.use('/v1',v1router);

module.exports={
    apirouter
}