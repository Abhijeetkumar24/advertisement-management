"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getProfileController_1 = __importDefault(require("../../controllers/userController/getProfileController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const sessionMiddleware_1 = __importDefault(require("../../middleware/sessionMiddleware"));
const router = express_1.default.Router();
router.get('/getprofile', authMiddleware_1.default, sessionMiddleware_1.default, getProfileController_1.default);
exports.default = router;
//# sourceMappingURL=getProfileRoute.js.map