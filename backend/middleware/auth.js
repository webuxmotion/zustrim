const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next) => {
    let token =
        req.body?.token ||
        req.query?.token ||
        req.headers['x-access-token'] ||
        req.headers?.authorization;

    if (!token) {
        return res.status(403).json({ message: "No token provided!" });
    }

    try {
        token = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }

    return next();
};

module.exports = verifyToken;