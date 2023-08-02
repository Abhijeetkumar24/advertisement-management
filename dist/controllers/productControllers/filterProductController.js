"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filterProductService_1 = __importDefault(require("../../services/productServices/filterProductService"));
const filterProductController = async (req, res) => {
    const minPrice = parseInt(req.body.minPrice);
    const maxPrice = parseInt(req.body.maxPrice);
    try {
        const result = await (0, filterProductService_1.default)(minPrice, maxPrice);
        console.log(result);
        res.status(200).json({ message: "filtered product", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in filter product" });
    }
};
exports.default = filterProductController;
//# sourceMappingURL=filterProductController.js.map