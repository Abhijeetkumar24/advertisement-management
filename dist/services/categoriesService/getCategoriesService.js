"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoriesModel_1 = __importDefault(require("../../database/models/categoriesModel"));
const getCategoriesService = async () => {
    try {
        const result = await categoriesModel_1.default.findAll();
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error("Error in Categories fetching from the service.");
    }
};
exports.default = getCategoriesService;
//# sourceMappingURL=getCategoriesService.js.map