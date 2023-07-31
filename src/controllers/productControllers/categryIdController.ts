import { Request, Response } from "express";
import categoryIdService from '../../services/productServices/categoryIdService';

const categoryIdController = async (req: Request, res: Response) => {
    const { productId } = req.body;

    try {
        const result = await categoryIdService (productId);
        console.log(result);
        if (result) {
            res.status(200).json({ message: "category ID fetch successfuly", result });
        }
        else {
            res.status(400).json({ message: "No catgory ID" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in category ID fetching" });
    }
};

export default categoryIdController;
