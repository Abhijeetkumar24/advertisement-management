import { Request, Response } from "express";
import reviewProductService from '../../services/productServices/reviewProdctService';

const reviewProductController = async (req: Request, res: Response) => {
    const { id, productId, review } = req.body;

    try {
        const result = await reviewProductService(id, productId, review);
        console.log(result);
        if (result) {
            res.status(200).json({ message: "new review added", result });
        }
        else {
            res.status(400).json({ message: "empty review" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in product review" });
    }
};

export default reviewProductController;
