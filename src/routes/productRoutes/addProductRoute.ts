import express from 'express';
import addProductController from '../../controllers/productControllers/addProductController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.post('/addproduct',authMiddleware,sessionMiddleware, addProductController);

export default router;