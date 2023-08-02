"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviewModel_1 = __importDefault(require("../../database/models/reviewModel"));
const reviewProductService = async (id, productId, review) => {
    const newReview = new reviewModel_1.default({
        userId: id,
        productId,
        review,
    });
    await newReview.save();
    return newReview;
};
exports.default = reviewProductService;
//# sourceMappingURL=reviewProdctService.js.map