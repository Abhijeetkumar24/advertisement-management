"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_1 = __importDefault(require("../../controllers/userController/loginController"));
const joiMiddleware_1 = require("../../middleware/joiMiddleware");
const router = express_1.default.Router();
router.post('/login', joiMiddleware_1.loginJoiMiddleware, loginController_1.default);
exports.default = router;
//# sourceMappingURL=loginRoute.js.map