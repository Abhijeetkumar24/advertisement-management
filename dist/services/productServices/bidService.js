"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../database/models/productModel"));
const bidServices = async (id, productId, newBid) => {
    try {
        const product = await productModel_1.default.findOne({ where: { id: productId } });
        if (newBid > product?.basePrice && newBid > product?.currentBid) {
            product?.update({
                bidderId: id,
                currentBid: newBid
            });
            await product?.save();
            return product;
        }
        // else {
        //     return "Give biding amount bigger than basePrice and current bid";
        // }
    }
    catch (err) {
        throw new Error("Error bid addition ");
    }
};
exports.default = bidServices;
//# sourceMappingURL=bidService.js.map