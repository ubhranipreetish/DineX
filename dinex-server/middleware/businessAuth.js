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
        console.log("Middleware Decoded Token:", decoded);

        // Check if it's a business or staff token
        if (decoded.role !== "business" && decoded.role !== "staff") {
            console.log("Access denied: Invalid role", decoded.role);
            return res.status(403).json({ msg: "Access denied. Business or Staff account required." });
        }

        // Attach user info to request
        if (decoded.role === "business") {
            req.businessOwnerId = decoded.id;
        } else if (decoded.role === "staff") {
            req.businessOwnerId = decoded.ownerId;
            req.staffId = decoded.id;
        }

        req.user = decoded; // Attach full decoded token for flexibility
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
