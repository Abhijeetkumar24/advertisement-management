"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../../database/models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ioredis_1 = __importDefault(require("ioredis"));
// import { createClient } from 'redis';
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginService = async (email, password) => {
    const client = new ioredis_1.default({
        host: '192.168.2.151',
        port: 6379,
    });
    // const client = createClient();
    // client.connect();
    try {
        const user = await userModel_1.default.findOne({ where: { email } });
        if (!user) {
            return { error: "Invalid email" };
        }
        const match = await bcrypt_1.default.compare(password, user.password);
        if (!match) {
            return { error: "Invalid password" };
        }
        const secret = "this is my secret";
        const accessToken = jsonwebtoken_1.default.sign({ userId: user.id }, secret, { expiresIn: '1h' });
        const decodedToken = jsonwebtoken_1.default.verify(accessToken, 'this is my secret');
        const userId = decodedToken?.userId;
        console.log(userId);
        console.log(JSON.stringify(userId));
        await client.set(JSON.stringify(userId), "true");
        return { message: "Login successful ", token: accessToken };
    }
    catch (err) {
        console.log(err);
        throw new Error("Error occurred");
    }
};
exports.default = loginService;
//# sourceMappingURL=loginServices.js.map