import { Request, Response } from "express";
import  addProductService  from '../../services/productServices/addProductService';

const addProductController = async (req: Request, res: Response) => {
  const { id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId} = req.body;

  try {
    const result = await addProductService(id, productName, description, title, images, basePrice, currentBid, bidderId, categoryId, addressId);
    console.log(result);
    res.status(200).json({ message: "Product added", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error in product addition" });
  }
};

export default addProductController;
