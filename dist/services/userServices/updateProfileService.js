"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../../database/models/userModel"));
const updateProfileService = async (id, username, email, name, phoneNumber) => {
    try {
        const user = await userModel_1.default.findOne({ where: { id } });
        console.log("user:", user);
        user?.set({
            username,
            email,
            name,
            phoneNumber
        });
        await user?.save();
        return user;
    }
    catch (err) {
        console.log(err);
        throw new Error("Error in updating profile from the service.");
    }
};
exports.default = updateProfileService;
//# sourceMappingURL=updateProfileService.js.map