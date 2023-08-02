"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviewProdctService_1 = __importDefault(require("../../services/productServices/reviewProdctService"));
const reviewProductController = async (req, res) => {
    const { id, productId, review } = req.body;
    try {
        const result = await (0, reviewProdctService_1.default)(id, productId, review);
        console.log(result);
        if (result) {
            res.status(200).json({ message: "new review added", result });
        }
        else {
            res.status(400).json({ message: "empty review" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in product review" });
    }
};
exports.default = reviewProductController;
//# sourceMappingURL=reviewProductController.js.map