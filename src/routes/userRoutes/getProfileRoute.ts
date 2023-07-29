import express from 'express';
import getProfileController from '../../controllers/userController/getProfileController';
import authMiddleware from '../../middleware/authMiddleware';


const router = express.Router();

router.get('/getprofile',authMiddleware, getProfileController);

export default router;