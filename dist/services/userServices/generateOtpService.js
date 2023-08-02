"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const userModel_1 = __importDefault(require("../../database/models/userModel"));
const generateOtpService = async (email) => {
    try {
        const user = await userModel_1.default.findOne({ where: { email } });
        if (!user) {
            throw new Error("User not found");
        }
        else {
            const otp = Math.floor(100000 + Math.random() * 900000); // 6 number opt generated
            console.log(otp);
            const client = new ioredis_1.default({
                host: '192.168.2.151',
                port: 6379,
            });
            // const client = createClient();
            // client.on("error", (err) => console.log("redis Client Error", err));    // on method is used to listen the "error" event when occur 
            // await client.connect();
            // const options: SetOptions = { EX: 30 };        // 30 sec expiry
            await client.set(user.email, otp); // third parameter is optional
            return otp;
        }
    }
    catch (error) {
        throw new Error("OTP Generation failed");
    }
};
exports.default = generateOtpService;
//# sourceMappingURL=generateOtpService.js.map