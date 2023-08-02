"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const sessionMiddleware = async (req, res, next) => {
    const { id } = req.body;
    console.log("hii1");
    try {
        const client = (0, redis_1.createClient)();
        await client.connect();
        const result = await client.exists(JSON.stringify(id));
        console.log("result", result);
        if (!result) {
            return res.status(400).json({ error: "User are logout, please login again" });
        }
        else {
            next();
        }
    }
    catch (err) {
    }
};
exports.default = sessionMiddleware;
//# sourceMappingURL=sessionMiddleware.js.map