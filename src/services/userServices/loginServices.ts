import User from '../../database/models/userModel';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


const loginService = async (email: string, password: string) => {
  try {
    const user:any = await User.findOne({where: {email}});

    if (!user) {
      return { error: "Invalid email" };
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return { error: "Invalid password" };
    }

    const secret = "this is my secret"; 
    const accessToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

   

    return { message: "Login successful ", token: accessToken };
  } catch (err) {
    throw new Error("Error occurred");
  }
};

export default loginService ;
