"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCategoriesService_1 = __importDefault(require("../../services/categoriesService/getCategoriesService"));
const getCategoriesController = async (req, res) => {
    //   const { id } = req.body;
    try {
        const result = await (0, getCategoriesService_1.default)();
        res.status(200).json({ message: "Categories fetch from database", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in categories fetching" });
    }
};
exports.default = getCategoriesController;
//# sourceMappingURL=getCategoriesController.js.map