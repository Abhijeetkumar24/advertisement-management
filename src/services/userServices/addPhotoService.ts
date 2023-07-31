import fs from 'fs/promises';
import path from 'path';
import User from '../../database/models/userModel';
export default async function addPhoto(filename: string) {
    try {
        const projectRoot = process.cwd();
        const uploadsFolder = path.join(projectRoot, 'uploads');
        const filePath = path.join(uploadsFolder, filename);

        try {
            await fs.access(filePath);
        } catch (err) {
            throw new Error('File not found.');
        }

        const fileBuffer = await fs.readFile(filePath);
        const user: any = await User.findOne({ where: { id: 2 } });
        if (user) {
            user.profileImage = fileBuffer;
            await user.save();
        }
        return user
    } catch (error) {
        console.error(error);
        throw error;
    }
}