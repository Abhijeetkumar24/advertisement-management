import express from 'express';
import updateProfileController from '../../controllers/userController/updateProfileController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';
import { updateProfileJoiMiddleware } from '../../middleware/joiMiddleware';


const router = express.Router();

router.post('/updateprofile',updateProfileJoiMiddleware ,authMiddleware,sessionMiddleware, updateProfileController);

export default router;