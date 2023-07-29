import { Request, Response } from "express";
import  deleteProfileService  from '../../services/userServices/deleteProfileService';

const deleteProfileController = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const result = await deleteProfileService(id);
    res.status(200).json({ message: "profile deleted", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error in deleting profile" });
  }
};

export default deleteProfileController;
