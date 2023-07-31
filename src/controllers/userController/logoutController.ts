import { Request, Response } from "express";
import  logoutService  from '../../services/userServices/logoutService';

const logoutController = async (req:Request, res:Response) => {
    const {id} = req.body;
    // console.log("id:",id)
    const stringId = JSON.stringify(id);
    // console.log("id1:",stringId);
    try {
        const result = await logoutService(stringId);
        res.status(200).json({message: "logout successful"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
};

export default logoutController;
