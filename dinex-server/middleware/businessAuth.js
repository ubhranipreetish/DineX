import jwt from "jsonwebtoken";

// Middleware to verify business JWT token
export const verifyBusinessToken = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ msg: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if it's a business token
        if (decoded.role !== "business") {
            return res.status(403).json({ msg: "Access denied. Business account required." });
        }

        // Attach user info to request
        req.businessOwnerId = decoded.id;
        req.businessEmail = decoded.email;
        req.restaurantName = decoded.restaurantName;

        next();
    } catch (err) {
        if (err.name === "JsonWebTokenError") {
            return res.status(401).json({ msg: "Invalid token" });
        }
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ msg: "Token expired" });
        }
        return res.status(500).json({ msg: "Server error during authentication" });
    }
};
