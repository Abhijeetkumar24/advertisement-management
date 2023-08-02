"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteProfileService_1 = __importDefault(require("../../services/userServices/deleteProfileService"));
const deleteProfileController = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await (0, deleteProfileService_1.default)(id);
        res.status(200).json({ message: "profile deleted", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in deleting profile" });
    }
};
exports.default = deleteProfileController;
//# sourceMappingURL=deleteProfileController.js.map