import signupRoute from './userRoutes/signupRoute';
import loginRoute from './userRoutes/loginRoute';
import getProfileRoute from './userRoutes/getProfileRoute';
import deleteProfileRoute from './userRoutes/deleteProfileRoute';
import updateProfileRoute from './userRoutes/updateProfileRoute';
import forgetPasswordRoute from './userRoutes/forgetPasswordRoute';
import getCategoriesRoute from './categoriesRoutes/getCategoriesRoute';


export default [
    signupRoute,
    loginRoute,
    getProfileRoute,
    deleteProfileRoute,
    updateProfileRoute,
    forgetPasswordRoute,
    getCategoriesRoute
];