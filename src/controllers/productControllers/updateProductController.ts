import { Request, Response } from "express";
import  updateProductService  from '../../services/productServices/updateProductService';

const updateProductController = async (req: Request, res: Response) => {
  const { id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId} = req.body;

  try {
    const result = await updateProductService(id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId);
    console.log(result);
    res.status(200).json({ message: "Product updated", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error in product updation" });
  }
};

export default updateProductController;
