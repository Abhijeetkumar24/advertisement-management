"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../../database/models/userModel"));
const deleteProfileService = async (id) => {
    try {
        const result = await userModel_1.default.destroy({ where: { id } });
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error("Error in deleting profile from the service.");
    }
};
exports.default = deleteProfileService;
//# sourceMappingURL=deleteProfileService.js.map