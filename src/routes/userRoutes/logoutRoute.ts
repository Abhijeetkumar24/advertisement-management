import express from 'express';
import logoutController from '../../controllers/userController/logoutController';
import authMiddleware from '../../middleware/authMiddleware';

const router = express.Router();

router.get('/logout', authMiddleware, logoutController);

export default router;