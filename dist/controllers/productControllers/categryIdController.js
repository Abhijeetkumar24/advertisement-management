"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryIdService_1 = __importDefault(require("../../services/productServices/categoryIdService"));
const categoryIdController = async (req, res) => {
    const { productId } = req.body;
    try {
        const result = await (0, categoryIdService_1.default)(productId);
        console.log(result);
        if (result) {
            res.status(200).json({ message: "category ID fetch successfuly", result });
        }
        else {
            res.status(400).json({ message: "No catgory ID" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in category ID fetching" });
    }
};
exports.default = categoryIdController;
//# sourceMappingURL=categryIdController.js.map