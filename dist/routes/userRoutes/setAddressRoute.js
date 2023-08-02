"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setAddressController_1 = __importDefault(require("../../controllers/userController/setAddressController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = express_1.default.Router();
router.post('/setaddress', authMiddleware_1.default, setAddressController_1.default);
exports.default = router;
//# sourceMappingURL=setAddressRoute.js.map