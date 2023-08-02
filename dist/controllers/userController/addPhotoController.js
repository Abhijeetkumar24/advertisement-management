"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const addPhotoService_1 = __importDefault(require("../../services/userServices/addPhotoService"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        const fileExtension = path_1.default.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});
const upload = (0, multer_1.default)({ storage });
const addPhotoController = async (req, res) => {
    try {
        const fileUpload = await new Promise((resolve, reject) => {
            upload.single('photo')(req, res, (err) => {
                if (err instanceof multer_1.default.MulterError) {
                    return reject(err);
                }
                else if (err) {
                    return reject(err);
                }
                resolve({ filename: req.file?.filename || '', size: req.file?.size || 0 });
            });
        });
        if (!fileUpload.filename) {
            return res.status(400).send('No photo uploaded.');
        }
        const { filename, size } = fileUpload;
        console.log('Uploaded photo:', filename);
        console.log('Size:', size);
        if (!fileUpload.filename) {
            res.send("something went wrong");
        }
        const user = (0, addPhotoService_1.default)(filename);
        res.send("SUCCESS");
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Some error occurred');
    }
};
exports.default = addPhotoController;
//# sourceMappingURL=addPhotoController.js.map