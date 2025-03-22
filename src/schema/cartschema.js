const mongoose = require('mongoose')
const { product } = require('./productscehma')

const cartschema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
        unique:true
    },
    items:[
        {
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"product"
        },
        quantity:
        {
         type:Number,
         required:true,
         default:1
        }
        }

    ]
},
{
    timestamps:true,
})

const cart = mongoose.model("cart",cartschema);

module.exports=cart;
