"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginServices_1 = __importDefault(require("../../services/userServices/loginServices"));
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await (0, loginServices_1.default)(email, password);
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
};
exports.default = loginController;
//# sourceMappingURL=loginController.js.map