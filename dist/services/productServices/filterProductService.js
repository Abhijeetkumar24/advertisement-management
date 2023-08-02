"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../database/models/productModel"));
const sequelize_1 = require("sequelize");
const filterProductService = async (minPrice, maxPrice) => {
    try {
        console.log(typeof minPrice, typeof maxPrice);
        const product = await productModel_1.default.findAll({
            where: {
                basePrice: {
                    [sequelize_1.Op.between]: [minPrice, maxPrice]
                }
            }
        });
        console.log("result:", product);
        return product;
    }
    catch (err) {
        console.log("message:", err);
        throw new Error("Error in filtering products from services");
    }
};
exports.default = filterProductService;
//# sourceMappingURL=filterProductService.js.map