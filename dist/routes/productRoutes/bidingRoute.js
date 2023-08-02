"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bidController_1 = __importDefault(require("../../controllers/productControllers/bidController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const sessionMiddleware_1 = __importDefault(require("../../middleware/sessionMiddleware"));
const router = express_1.default.Router();
router.post('/bid', authMiddleware_1.default, sessionMiddleware_1.default, bidController_1.default);
exports.default = router;
//# sourceMappingURL=bidingRoute.js.map