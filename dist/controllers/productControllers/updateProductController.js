"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateProductService_1 = __importDefault(require("../../services/productServices/updateProductService"));
const updateProductController = async (req, res) => {
    const { id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId } = req.body;
    try {
        const result = await (0, updateProductService_1.default)(id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId);
        console.log(result);
        res.status(200).json({ message: "Product updated", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in product updation" });
    }
};
exports.default = updateProductController;
//# sourceMappingURL=updateProductController.js.map