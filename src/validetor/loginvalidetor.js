const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/serverconfig');

const isloggedin = async (req, res, next) => {
    const token = req.cookies["authtoken"];

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
            id: decode.id,
            role: decode.role
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

const isadmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        console.log(req.user.role);
        return next();
    }
    else{
        return res.status(403).json({
            message: "You are not authorized for this action",
            success: false,
            data: {},
            error: {
                status: 403,
                reason: "User unauthorized for this action"
            }
        });
    }
};

module.exports = {
    isloggedin,
    isadmin
};
