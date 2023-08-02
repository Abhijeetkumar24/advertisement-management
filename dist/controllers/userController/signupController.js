"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signupService_1 = __importDefault(require("../../services/userServices/signupService"));
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }); 
const signupController = async (req, res) => {
    try {
        const { username, email, password, name, address, profileImage, phoneNumber, gender, dob } = req.body;
        // console.log(password);
        // const profileImage = req.file?.buffer || null;
        const user = await (0, signupService_1.default)(username, email, password, name, address, profileImage, phoneNumber, gender, dob);
        res.status(201).json({ message: "Signup completed ", user });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
};
exports.default = signupController;
//# sourceMappingURL=signupController.js.map