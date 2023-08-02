"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signupRoute_1 = __importDefault(require("./userRoutes/signupRoute"));
const loginRoute_1 = __importDefault(require("./userRoutes/loginRoute"));
const getProfileRoute_1 = __importDefault(require("./userRoutes/getProfileRoute"));
const deleteProfileRoute_1 = __importDefault(require("./userRoutes/deleteProfileRoute"));
const updateProfileRoute_1 = __importDefault(require("./userRoutes/updateProfileRoute"));
const forgetPasswordRoute_1 = __importDefault(require("./userRoutes/forgetPasswordRoute"));
const getCategoriesRoute_1 = __importDefault(require("./categoriesRoutes/getCategoriesRoute"));
const addProductRoute_1 = __importDefault(require("./productRoutes/addProductRoute"));
const setAddressRoute_1 = __importDefault(require("./userRoutes/setAddressRoute"));
const deleteProductRoute_1 = __importDefault(require("./productRoutes/deleteProductRoute"));
const updateProductRoute_1 = __importDefault(require("./productRoutes/updateProductRoute"));
const productDetailRoute_1 = __importDefault(require("./productRoutes/productDetailRoute"));
const reviewProductRoute_1 = __importDefault(require("./productRoutes/reviewProductRoute"));
const categoryIdRoute_1 = __importDefault(require("./productRoutes/categoryIdRoute"));
const filterProductRoute_1 = __importDefault(require("./productRoutes/filterProductRoute"));
const logoutRoute_1 = __importDefault(require("./userRoutes/logoutRoute"));
const bidingRoute_1 = __importDefault(require("./productRoutes/bidingRoute"));
const addPhotoRoute_1 = __importDefault(require("./userRoutes/addPhotoRoute"));
exports.default = [
    signupRoute_1.default,
    loginRoute_1.default,
    getProfileRoute_1.default,
    deleteProfileRoute_1.default,
    updateProfileRoute_1.default,
    forgetPasswordRoute_1.default,
    setAddressRoute_1.default,
    getCategoriesRoute_1.default,
    addProductRoute_1.default,
    deleteProductRoute_1.default,
    updateProductRoute_1.default,
    productDetailRoute_1.default,
    reviewProductRoute_1.default,
    categoryIdRoute_1.default,
    filterProductRoute_1.default,
    logoutRoute_1.default,
    bidingRoute_1.default,
    addPhotoRoute_1.default,
];
//# sourceMappingURL=indexRoute.js.map