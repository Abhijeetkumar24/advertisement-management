import { Request, Response } from "express";
import newPasswordService from '../../services/userServices/newPasswordService';

const newPasswordController = async(req: Request, res: Response) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await newPasswordService(email,otp,newPassword );
    if (!user) {
      res.send("Invalid OTP or Email or OPT expired");
    } else {
      res.status(201).json({
        message: "OTP Correct",
        user:user.email,
        newPassword
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Unable to Generate OTP to some error!");
  }
}

export default newPasswordController;
