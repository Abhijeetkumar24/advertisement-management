import express from 'express';
import generateOtpController from "../../controllers/userController/generateOtpController"
import newPasswordController from "../../controllers/userController/newPasswordController";
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';
import { generateOtpJoiMiddleware, newPasswordJoiMiddleware } from '../../middleware/joiMiddleware';


const router = express.Router();

router.post('/generateotp', generateOtpJoiMiddleware, authMiddleware, sessionMiddleware, generateOtpController);
router.post('/newpassword', newPasswordJoiMiddleware, authMiddleware, sessionMiddleware, newPasswordController)

export default router;