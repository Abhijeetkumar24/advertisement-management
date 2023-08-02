"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../../database/models/userModel"));
const signupService = async (username, email, password, name, address, profileImage, phoneNumber, gender, dob) => {
    console.log(password);
    const hashedPassword = await bcrypt_1.default.hash(password, 2);
    const newUser = new userModel_1.default({
        username,
        email,
        password: hashedPassword,
        name,
        address,
        profileImage,
        phoneNumber,
        gender,
        dob
    });
    await newUser.save();
    return newUser;
};
exports.default = signupService;
//# sourceMappingURL=signupService.js.map