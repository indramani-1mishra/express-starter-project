const { default: mongoose } = require("mongoose");

const orderschema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product", 
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    status: {
        type: String,
        enum: ["ordered", "delivered", "processing", "outfordelivery"],
        default: "ordered"
    },
    address: {
        type: String,
        minlength: [10, "Address length minimum 10 characters"]
    },
    Paymentmethod: {
        type: String,
        enum: ["online", "cash"],
        default: "cash"
    }
}, {
    timestamps: true
});

const order = mongoose.model("Order", orderschema);

module.exports = {
    order
};
