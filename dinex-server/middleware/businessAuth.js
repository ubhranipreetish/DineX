import jwt from "jsonwebtoken";

export const verifyBusinessToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ msg: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "business" && decoded.role !== "staff") {
            return res.status(403).json({ msg: "Access denied. Business or Staff account required." });
        }

        if (decoded.role === "business") {
            req.businessOwnerId = decoded.id;
        } else if (decoded.role === "staff") {
            req.businessOwnerId = decoded.ownerId;
            req.staffId = decoded.id;
        }

        req.user = decoded; 
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