"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logoutController_1 = __importDefault(require("../../controllers/userController/logoutController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = express_1.default.Router();
router.get('/logout', authMiddleware_1.default, logoutController_1.default);
exports.default = router;
//# sourceMappingURL=logoutRoute.js.map