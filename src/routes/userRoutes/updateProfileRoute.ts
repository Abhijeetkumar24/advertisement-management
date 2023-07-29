import express from 'express';
import updateProfileController from "../../controllers/userController/updateProfileController";
import authMiddleware from '../../middleware/authMiddleware';


const router = express.Router();

router.put('/updateprofile',authMiddleware, updateProfileController);

export default router;