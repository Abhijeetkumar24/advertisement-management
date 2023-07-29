import express from 'express';
// import forgetPasswordController from '../../controllers/userController/generateOtpController';
import checkOtpController from "../../controllers/userController/checkOtpController";
import generateOtpController from "../../controllers/userController/generateOtpController"
import authMiddleware from '../../middleware/authMiddleware';


const router = express.Router();

router.post('/generateotp', generateOtpController);
router.post('/checkotp', checkOtpController)

export default router;