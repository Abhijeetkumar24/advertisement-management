import User from '../../database/models/userModel';
import bcrypt from 'bcrypt';
import { createClient } from 'redis';
import jwt, { JwtPayload }  from "jsonwebtoken";


const loginService = async (email: string, password: string) => {
  const client = createClient();
  client.connect();
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

    const decodedToken = <JwtPayload>jwt.verify(accessToken, 'this is my secret') ;
    const userId = decodedToken?.userId;
    console.log(userId);
    console.log(JSON.stringify(userId));

    await client.set(JSON.stringify(userId), "true");

    return { message: "Login successful ", token: accessToken };
  } catch (err) {
    console.log(err);
    throw new Error("Error occurred");
  }
};

export default loginService ;
