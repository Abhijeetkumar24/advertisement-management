import express from 'express';
import loginController from '../../controllers/userController/loginController';
import { loginJoiMiddleware } from '../../middleware/joiMiddleware';


const router = express.Router();

router.post('/login', loginJoiMiddleware,loginController);

export default router;