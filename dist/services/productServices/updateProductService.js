"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../database/models/productModel"));
const updateProductServices = async (id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId) => {
    try {
        const product = await productModel_1.default.findOne({ where: { userId: id } });
        product?.set({
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
        await product?.save();
        return product;
    }
    catch (err) {
        throw new Error("Error in updating the product");
    }
};
exports.default = updateProductServices;
//# sourceMappingURL=updateProductService.js.map