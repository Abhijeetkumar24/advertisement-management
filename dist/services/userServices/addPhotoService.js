"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const userModel_1 = __importDefault(require("../../database/models/userModel"));
async function addPhoto(filename) {
    try {
        const projectRoot = process.cwd();
        const uploadsFolder = path_1.default.join(projectRoot, 'uploads');
        const filePath = path_1.default.join(uploadsFolder, filename);
        try {
            await promises_1.default.access(filePath);
        }
        catch (err) {
            throw new Error('File not found.');
        }
        const fileBuffer = await promises_1.default.readFile(filePath);
        const user = await userModel_1.default.findOne({ where: { id: 2 } });
        if (user) {
            user.profileImage = fileBuffer;
            await user.save();
        }
        return user;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
exports.default = addPhoto;
//# sourceMappingURL=addPhotoService.js.map