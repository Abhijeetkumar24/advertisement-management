import express from 'express';
import setAddressController from '../../controllers/userController/setAddressController';
import authMiddleware from '../../middleware/authMiddleware';


const router = express.Router();

router.post('/setaddress',authMiddleware, setAddressController);

export default router;