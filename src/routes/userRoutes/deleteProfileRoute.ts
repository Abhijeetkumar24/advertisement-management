import express from 'express';
import deleteProfileController from '../../controllers/userController/deleteProfileController';
import authMiddleware from '../../middleware/authMiddleware';


const router = express.Router();

router.delete('/deleteprofile',authMiddleware, deleteProfileController);

export default router;