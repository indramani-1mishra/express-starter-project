const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/serverconfig');

const isloggedin = async (req, res, next) => {
    const token = req.cookies["authtoken"];  // ✅ Corrected line

    if (!token) {
        return res.status(401).json({
            success: false,
            data: {},
            error: "not authenticated",
            message: "No auth token provided"
        });
    }

    try {
        const decode = jwt.verify(token, JWT_SECRET_KEY);
        req.user = {
            email: decode.email,
            id: decode.id
        };
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            data: {},
            error: "not authenticated",
            message: "Invalid or expired token"
        });
    }
};

module.exports = {
    isloggedin
};
