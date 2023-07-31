import express from 'express';
import signupController from '../../controllers/userController/signupController';
import { signUpJoiMiddleware } from '../../middleware/joiMiddleware';


const router = express.Router();

router.post('/signup',signUpJoiMiddleware, signupController);

export default router;