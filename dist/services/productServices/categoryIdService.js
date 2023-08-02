"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../database/models/productModel"));
const categoryIdService = async (productId) => {
    try {
        const product = await productModel_1.default.findOne({ where: { id: productId } });
        const categoryId = product?.categoryId;
        return categoryId;
    }
    catch (err) {
        console.log(err);
        throw new Error("Error in fetching cateory ID from the service.");
    }
};
exports.default = categoryIdService;
//# sourceMappingURL=categoryIdService.js.map