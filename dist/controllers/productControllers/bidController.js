"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bidService_1 = __importDefault(require("../../services/productServices/bidService"));
const bidController = async (req, res) => {
    const { id, productId, newBid } = req.body;
    try {
        const result = await (0, bidService_1.default)(id, productId, newBid);
        if (!result) {
            res.status(400).json({ message: "Give biding amount bigger than basePrice and current bid" });
        }
        res.status(200).json({ message: "New Bid Added", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in Bid addition" });
    }
};
exports.default = bidController;
//# sourceMappingURL=bidController.js.map