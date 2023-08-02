"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateProfileController_1 = __importDefault(require("../../controllers/userController/updateProfileController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const sessionMiddleware_1 = __importDefault(require("../../middleware/sessionMiddleware"));
const joiMiddleware_1 = require("../../middleware/joiMiddleware");
const router = express_1.default.Router();
router.post('/updateprofile', joiMiddleware_1.updateProfileJoiMiddleware, authMiddleware_1.default, sessionMiddleware_1.default, updateProfileController_1.default);
exports.default = router;
//# sourceMappingURL=updateProfileRoute.js.map