"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../database/models/productModel"));
const ProductDetailService = async (id) => {
    try {
        const product = await productModel_1.default.findOne({ where: { userId: id } });
        return product;
    }
    catch (err) {
        throw new Error("Error in feching Product details from services");
    }
};
exports.default = ProductDetailService;
//# sourceMappingURL=productDetailService.js.map