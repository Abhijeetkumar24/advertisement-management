"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../database/models/productModel"));
const deleteProductService = async (id) => {
    try {
        const result = await productModel_1.default.destroy({ where: { userId: id } });
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error("Error in deleting product from the service.");
    }
};
exports.default = deleteProductService;
//# sourceMappingURL=deleteProductService.js.map