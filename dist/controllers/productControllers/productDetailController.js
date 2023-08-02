"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productDetailService_1 = __importDefault(require("../../services/productServices/productDetailService"));
const ProductDetailController = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await (0, productDetailService_1.default)(id);
        console.log(result);
        res.status(200).json({ message: "Product details", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in fetching product details" });
    }
};
exports.default = ProductDetailController;
//# sourceMappingURL=productDetailController.js.map