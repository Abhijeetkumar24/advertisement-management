import bcrypt from 'bcrypt';

import User from '../../database/models/userModel';


const signupService = async(username:string, email:string, password:string, name:string, address:string, profileImage:string ,phoneNumber:number, gender:string, dob:Date) => {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password , 2);
    
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        name,
        address,
        profileImage,
        phoneNumber,
        gender,
        dob
    });
    await newUser.save();
    return newUser;

}

export default signupService;