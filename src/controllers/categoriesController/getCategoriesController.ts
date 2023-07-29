import { Request, Response } from "express";
import  getCategoriesService  from '../../services/categoriesService/getCategoriesService';

const getCategoriesController = async (req: Request, res: Response) => {
//   const { id } = req.body;

  try {
    const result = await getCategoriesService();
    res.status(200).json({ message: "Categories fetch from database", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error in categories fetching" });
  }
};

export default getCategoriesController;
