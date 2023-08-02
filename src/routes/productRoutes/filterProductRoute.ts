import express from 'express';
import filterProductController from '../../controllers/productControllers/filterProductController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';
import { filterProductJoiMiddleware } from '../../middleware/joiMiddleware';


const router = express.Router();

router.post('/filterproduct', filterProductJoiMiddleware, authMiddleware, sessionMiddleware, filterProductController);

export default router;