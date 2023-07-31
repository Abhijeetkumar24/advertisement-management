import express from 'express';
import reviewProductController from '../../controllers/productControllers/reviewProductController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';
import { reviewProductJoiMiddleware } from '../../middleware/joiMiddleware';


const router = express.Router();

router.post('/reviewproduct', reviewProductJoiMiddleware, authMiddleware, sessionMiddleware, reviewProductController);

export default router;