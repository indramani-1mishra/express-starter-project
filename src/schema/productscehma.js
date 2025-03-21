const mongoose = require('mongoose');
const { Schema } = mongoose;

const productschema = new Schema({
    productname: {
        type: String,
        required: [true, "Product name is required"],
        minlength: [5, "Min length of product name is 5"],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        minlength: [5, "Min length of description is 5"]
    },
    image: {
        type: String,
        default: "no-image.jpg"  // ✅ Default image
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price cannot be negative"]  // ✅ Price validation
    },
    category: {
        type: String,
        enum: ["veg", "non-veg", "drinks"],
        required: true
    },
    instock: {
        type: Boolean,
        default: true  // ✅ Default value true
    },
    ratings: {
        type: Number,
        default: 0,
        min: 0,
        max: 5  // ✅ Ratings between 0 to 5
    },
    reviews: {
        type: Number,
        default: 0
    },
   
}, {
    timestamps: true
});

const product = mongoose.model("product",productschema);

module.exports={
    product
}