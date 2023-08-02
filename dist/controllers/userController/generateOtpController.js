"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateOtpService_1 = __importDefault(require("../../services/userServices/generateOtpService"));
const generateOtpController = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = await (0, generateOtpService_1.default)(email);
        if (!otp) {
            res.send("Invalid Credentials");
        }
        else {
            res.status(201).json({ message: "OTP generated", OTP: otp });
        }
    }
    catch (error) {
        console.log(error);
        res.send("Error in OTP Generation ");
    }
};
exports.default = generateOtpController;
//# sourceMappingURL=generateOtpController.js.map