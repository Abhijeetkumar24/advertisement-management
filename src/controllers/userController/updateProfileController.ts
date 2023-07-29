import { Request, Response } from "express";
import  updateProfileService  from '../../services/userServices/updateProfileService';

const updateProfileController = async (req: Request, res: Response) => {
  const { id , username, email, name, phoneNumber} = req.body;

  try {
    const result = await updateProfileService(id, username, email, name , phoneNumber);
    console.log(result);
    res.status(200).json({ message: "profile updated", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error in profile upadating" });
  }
};

export default updateProfileController;
