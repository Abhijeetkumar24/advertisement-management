import express from 'express';
import deleteProductController from '../../controllers/productControllers/deleteProductController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.post('/deleteproduct',authMiddleware,sessionMiddleware, deleteProductController);

export default router;