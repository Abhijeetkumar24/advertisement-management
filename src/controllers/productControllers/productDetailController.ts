import { Request, Response } from "express";
import  ProductDetailService  from '../../services/productServices/productDetailService'

const ProductDetailController = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const result = await ProductDetailService(id );
    console.log(result);
    res.status(200).json({ message: "Product details", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error in fetching product details" });
  }
};

export default ProductDetailController;
