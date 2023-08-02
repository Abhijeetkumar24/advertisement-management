"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categryIdController_1 = __importDefault(require("../../controllers/productControllers/categryIdController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const sessionMiddleware_1 = __importDefault(require("../../middleware/sessionMiddleware"));
const router = express_1.default.Router();
router.post('/categoryId', authMiddleware_1.default, sessionMiddleware_1.default, categryIdController_1.default);
exports.default = router;
//# sourceMappingURL=categoryIdRoute.js.map