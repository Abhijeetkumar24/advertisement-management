"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getProfileService_1 = __importDefault(require("../../services/userServices/getProfileService"));
const getProfileController = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await (0, getProfileService_1.default)(id);
        res.status(200).json({ message: "profile fetch from database", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in post fetching" });
    }
};
exports.default = getProfileController;
//# sourceMappingURL=getProfileController.js.map