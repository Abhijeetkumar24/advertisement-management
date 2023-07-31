import { Request, Response } from "express";
import generateOtpService from "../../services/userServices/generateOtpService";

const generateOtpController = async(req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const otp = await generateOtpService(email);
    if (!otp) {
      res.send("Invalid Credentials");
    } else {
      res.status(201).json({message: "OTP generated", OTP: otp});
    }
  } catch (error) {
    console.log(error);
    res.send("Error in OTP Generation ");
  }
}

export default generateOtpController;

