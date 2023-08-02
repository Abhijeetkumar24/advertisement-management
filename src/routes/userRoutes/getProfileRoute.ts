import express from 'express';
import getProfileController from '../../controllers/userController/getProfileController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.get('/getprofile',authMiddleware, sessionMiddleware, getProfileController);

export default router;