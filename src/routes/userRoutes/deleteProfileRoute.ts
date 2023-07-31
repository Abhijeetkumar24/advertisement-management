import express from 'express';
import deleteProfileController from '../../controllers/userController/deleteProfileController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.delete('/deleteprofile',authMiddleware,sessionMiddleware, deleteProfileController);

export default router;