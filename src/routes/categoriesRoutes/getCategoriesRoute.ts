import express from 'express';
import getCategoriesController from '../../controllers/categoriesController/getCategoriesController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.get('/getcategories', authMiddleware, sessionMiddleware, getCategoriesController);

export default router;