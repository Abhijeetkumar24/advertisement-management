import signupRoute from './userRoutes/signupRoute';
import loginRoute from './userRoutes/loginRoute';
import getProfileRoute from './userRoutes/getProfileRoute';
import deleteProfileRoute from './userRoutes/deleteProfileRoute';
import updateProfileRoute from './userRoutes/updateProfileRoute';
import forgetPasswordRoute from './userRoutes/forgetPasswordRoute';
import getCategoriesRoute from './categoriesRoutes/getCategoriesRoute';
import addProductRoute from './productRoutes/addProductRoute';
import setAddressRoute from './userRoutes/setAddressRoute';
import deleteProductRoute from './productRoutes/deleteProductRoute';
import updateProductRoute from './productRoutes/updateProductRoute';
import productDetailRoute from './productRoutes/productDetailRoute';
import reviewProductRoute from './productRoutes/reviewProductRoute';
import categoryIdRoute from './productRoutes/categoryIdRoute';
import filterProductRoute from './productRoutes/filterProductRoute';
import logoutController from './userRoutes/logoutRoute';
import bidingRoute from './productRoutes/bidingRoute';
import addPhotoRoute from './userRoutes/addPhotoRoute'


export default [
    signupRoute,
    loginRoute,
    getProfileRoute,
    deleteProfileRoute,
    updateProfileRoute,
    forgetPasswordRoute,
    setAddressRoute,
    getCategoriesRoute,
    addProductRoute,
    deleteProductRoute,
    updateProductRoute,
    productDetailRoute,
    reviewProductRoute,
    categoryIdRoute,
    filterProductRoute,
    logoutController,
    bidingRoute,
    addPhotoRoute,

];