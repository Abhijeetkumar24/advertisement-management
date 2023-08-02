"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateProfileService_1 = __importDefault(require("../../services/userServices/updateProfileService"));
const updateProfileController = async (req, res) => {
    const { id, username, email, name, phoneNumber } = req.body;
    try {
        const result = await (0, updateProfileService_1.default)(id, username, email, name, phoneNumber);
        console.log(result);
        res.status(200).json({ message: "profile updated", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in profile upadating" });
    }
};
exports.default = updateProfileController;
//# sourceMappingURL=updateProfileController.js.map