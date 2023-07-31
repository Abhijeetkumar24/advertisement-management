import express from 'express';
import ProductDetailController from '../../controllers/productControllers/productDetailController'
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.post('/productdetail',authMiddleware,sessionMiddleware, ProductDetailController);

export default router;