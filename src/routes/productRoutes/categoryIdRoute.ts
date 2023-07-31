import express from 'express';
import categoryIdController from '../../controllers/productControllers/categryIdController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.post('/categoryId',authMiddleware,sessionMiddleware, categoryIdController);

export default router;