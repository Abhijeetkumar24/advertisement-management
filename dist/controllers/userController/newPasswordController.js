"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newPasswordService_1 = __importDefault(require("../../services/userServices/newPasswordService"));
const newPasswordController = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        const user = await (0, newPasswordService_1.default)(email, otp, newPassword);
        if (!user) {
            res.send("Invalid OTP or Email or OPT expired");
        }
        else {
            res.status(201).json({
                message: "OTP Correct",
                user: user.email,
                newPassword
            });
        }
    }
    catch (error) {
        console.log(error);
        res.send("Unable to Generate OTP to some error!");
    }
};
exports.default = newPasswordController;
//# sourceMappingURL=newPasswordController.js.map