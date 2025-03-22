const { getcarts } = require("../repository/createcart");

const findcart = async (userid) => {
    try {
        const response = await getcarts(userid);
        return response;
    } catch (error) {
        console.error("Error in findcart service:", error);  // 🔍 Debugging
        throw {
            message: "Error in service layer",
            originalError: error   // Optional: Include original error
        };
    }
};

module.exports = {
    findcart
};
