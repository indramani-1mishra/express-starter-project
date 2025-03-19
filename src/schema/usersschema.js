const mongoose = require('mongoose');

// Schema ko mongoose se destructure kar sakte ho
const { Schema } = mongoose;

// User details schema define karte hain
const usersDetailSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email"
        ]
    },
    phonenumber: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        unique: true
    }
}, {
    timestamps: true
});

// Model create karo
const User = mongoose.model('Userdetails', usersDetailSchema);

module.exports = User;
