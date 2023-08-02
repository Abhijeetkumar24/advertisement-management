"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addProductService_1 = __importDefault(require("../../services/productServices/addProductService"));
const addProductController = async (req, res) => {
    const { id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId } = req.body;
    try {
        const result = await (0, addProductService_1.default)(id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId);
        console.log(result);
        res.status(200).json({ message: "Product added", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in product addition" });
    }
};
exports.default = addProductController;
//# sourceMappingURL=addProductController.js.map