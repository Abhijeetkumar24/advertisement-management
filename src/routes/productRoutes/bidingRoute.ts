import express from 'express';
import bidingController from '../../controllers/productControllers/bidController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.post('/bid',authMiddleware,sessionMiddleware, bidingController);

export default router;