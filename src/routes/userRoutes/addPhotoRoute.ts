import express from 'express';
import addPhotoController from '../../controllers/userController/addPhotoController';
import authMiddleware from '../../middleware/authMiddleware';
import sessionMiddleware from '../../middleware/sessionMiddleware';


const router = express.Router();

router.post('/addphoto',authMiddleware, sessionMiddleware, addPhotoController);

export default router;