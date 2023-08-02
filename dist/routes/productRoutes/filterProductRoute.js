"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const filterProductController_1 = __importDefault(require("../../controllers/productControllers/filterProductController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const sessionMiddleware_1 = __importDefault(require("../../middleware/sessionMiddleware"));
const joiMiddleware_1 = require("../../middleware/joiMiddleware");
const router = express_1.default.Router();
router.post('/filterproduct', joiMiddleware_1.filterProductJoiMiddleware, authMiddleware_1.default, sessionMiddleware_1.default, filterProductController_1.default);
exports.default = router;
//# sourceMappingURL=filterProductRoute.js.map