import { error } from "console";
import { createClient, SetOptions } from "redis";
import User from "../../database/models/userModel";
import bcrypt from "bcrypt";
import Redis from "ioredis";

const newPasswordService = async(email: string, otp: string, newPassword: string): Promise<any> => {
  try {
    // const client = createClient();
    // client.on("error", (err) => console.log("redis Client Error", err));
    // await client.connect();
    const client = new Redis({
      host: '192.168.2.151',
      port: 6379,
    });
    
    

    if (otp == (await client.get(email))) {
      const user: any = await User.findOne({ where: { email: email } });

      if (user) {
        const hashedPassword = await bcrypt.hash(newPassword , 2);
        user.password = hashedPassword;
        await user.save();
      } else {
        throw error("Error updating Password");
      }
      return user;
    } else {
      throw error("Invalid OTP");
    }
  } 
  catch (error) {
    return error;
  }
}

export default newPasswordService;

