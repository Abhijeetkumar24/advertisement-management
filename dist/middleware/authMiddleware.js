"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = async (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({ error: "Header not found" });
    }
    const token = header.split(' ')[1];
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, 'this is my secret');
        req.body.id = decodedToken?.userId;
        console.log(decodedToken);
        next();
    }
    catch (error) {
        res.status(403).json({ error: "Authentication fail. Invalid token" });
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map