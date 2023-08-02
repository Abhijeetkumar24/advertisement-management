"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generateOtpController_1 = __importDefault(require("../../controllers/userController/generateOtpController"));
const newPasswordController_1 = __importDefault(require("../../controllers/userController/newPasswordController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const sessionMiddleware_1 = __importDefault(require("../../middleware/sessionMiddleware"));
const joiMiddleware_1 = require("../../middleware/joiMiddleware");
const router = express_1.default.Router();
router.post('/generateotp', joiMiddleware_1.generateOtpJoiMiddleware, authMiddleware_1.default, sessionMiddleware_1.default, generateOtpController_1.default);
router.post('/newpassword', joiMiddleware_1.newPasswordJoiMiddleware, authMiddleware_1.default, sessionMiddleware_1.default, newPasswordController_1.default);
exports.default = router;
//# sourceMappingURL=forgetPasswordRoute.js.map