import { Request, Response } from "express";
import bidService from '../../services/productServices/bidService';

const bidController = async (req: Request, res: Response) => {
    const { id, productId, newBid } = req.body;

    try {
        const result = await bidService(id, productId, newBid);
        if (!result) {
            res.status(400).json({ message: "Give biding amount bigger than basePrice and current bid" });
        }
        res.status(200).json({ message: "New Bid Added", result });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in Bid addition" });
    }
};

export default bidController;
