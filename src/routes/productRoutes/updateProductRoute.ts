import express from 'express';
import updateProductController from '../../controllers/productControllers/updateProductController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.post('/updateproduct',authMiddleware,sessionMiddleware, updateProductController);

export default router;