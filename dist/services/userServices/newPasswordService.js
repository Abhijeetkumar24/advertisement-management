"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const userModel_1 = __importDefault(require("../../database/models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ioredis_1 = __importDefault(require("ioredis"));
const newPasswordService = async (email, otp, newPassword) => {
    try {
        // const client = createClient();
        // client.on("error", (err) => console.log("redis Client Error", err));
        // await client.connect();
        const client = new ioredis_1.default({
            host: '192.168.2.151',
            port: 6379,
        });
        if (otp == (await client.get(email))) {
            const user = await userModel_1.default.findOne({ where: { email: email } });
            if (user) {
                const hashedPassword = await bcrypt_1.default.hash(newPassword, 2);
                user.password = hashedPassword;
                await user.save();
            }
            else {
                throw (0, console_1.error)("Error updating Password");
            }
            return user;
        }
        else {
            throw (0, console_1.error)("Invalid OTP");
        }
    }
    catch (error) {
        return error;
    }
};
exports.default = newPasswordService;
//# sourceMappingURL=newPasswordService.js.map