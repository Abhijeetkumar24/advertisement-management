import { Request, Response } from "express";
import  filterProductService  from '../../services/productServices/filterProductService';

const filterProductController = async (req: Request, res: Response) => {
    
    
    const minPrice = parseInt(req.body.minPrice);
    const maxPrice = parseInt(req.body.maxPrice);

  try {
    const result = await filterProductService(minPrice, maxPrice);
    console.log(result);
    res.status(200).json({ message: "filtered product", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error in filter product" });
  }
};

export default filterProductController;
