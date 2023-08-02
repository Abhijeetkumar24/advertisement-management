
import { Request, Response } from "express";
import multer from 'multer';
import signupService from "../../services/userServices/signupService";

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }); 

const signupController = async (req: Request, res: Response) => {
    try {
        const { username, email, password, name, address, profileImage, phoneNumber, gender, dob } = req.body;
        // console.log(password);
        // const profileImage = req.file?.buffer || null;
        const user = await signupService(username, email, password, name, address, profileImage, phoneNumber, gender, dob);

        res.status(201).json({ message: "Signup completed ", user });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
}
export default signupController;