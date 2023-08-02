"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteProductService_1 = __importDefault(require("../../services/productServices/deleteProductService"));
const deleteProductController = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await (0, deleteProductService_1.default)(id);
        console.log(result);
        if (result) {
            res.status(200).json({ message: "Product deleted", result });
        }
        else {
            res.status(400).json({ message: "User don't have product" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in product deletion" });
    }
};
exports.default = deleteProductController;
//# sourceMappingURL=deleteProductController.js.map