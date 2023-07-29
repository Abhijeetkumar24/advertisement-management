import express from 'express';
import getCategoriesController from '../../controllers/categoriesController/getCategoriesController';
import authMiddleware from '../../middleware/authMiddleware';


const router = express.Router();

router.get('/getcategories',authMiddleware, getCategoriesController);

export default router;