"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logoutService_1 = __importDefault(require("../../services/userServices/logoutService"));
const logoutController = async (req, res) => {
    const { id } = req.body;
    // console.log("id:",id)
    const stringId = JSON.stringify(id);
    // console.log("id1:",stringId);
    try {
        const result = await (0, logoutService_1.default)(stringId);
        res.status(200).json({ message: "logout successful" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
};
exports.default = logoutController;
//# sourceMappingURL=logoutController.js.map