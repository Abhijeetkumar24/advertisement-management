import { Request, Response } from "express";
import deleteProductService from '../../services/productServices/deleteProductService';

const deleteProductController = async (req: Request, res: Response) => {
    const { id } = req.body;

    try {
        const result = await deleteProductService(id);
        console.log(result);
        if (result) {
            res.status(200).json({ message: "Product deleted", result });
        }
        else {
            res.status(400).json({ message: "User don't have product" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error in product deletion" });
    }
};

export default deleteProductController;
