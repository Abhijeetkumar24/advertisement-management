"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../database/models/productModel"));
const addProductServices = async (id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId) => {
    const newProduct = new productModel_1.default({
        userId: id,
        productName,
        description,
        title,
        images,
        basePrice,
        currentBid,
        bidderId,
        categoryId,
        addressId
    });
    await newProduct.save();
    return newProduct;
};
exports.default = addProductServices;
//# sourceMappingURL=addProductService.js.map