const mongoose = require('mongoose');
const serverConfig = require('./serverconfig.js');

const connectdb = async () => {
    const { DB_URL } = serverConfig;
    try {
        await mongoose.connect(DB_URL);  // ✅ Await added here
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB: " + error);
    }
};

module.exports = {
    connectdb
};
