const mongoose = require('mongoose');
const bcrypt= require('bcrypt')
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
    },
   password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
}

}, {
    timestamps: true
});

usersDetailSchema.pre("save", async function () {
   
    const hashpassword = await bcrypt.hash(this.password,10);
    this.password= hashpassword;
});


// Model create karo
const User = mongoose.model('Userdetails', usersDetailSchema);

module.exports = User;
