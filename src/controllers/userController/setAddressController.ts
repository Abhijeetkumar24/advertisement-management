import { Request, Response } from "express";
import  { setAddressService }  from '../../services/userServices/setAddressService';

const setAddressController = async (req: Request, res: Response) => {
  const {id, houseno, streetno, area, landmark, city, country, zipcode, state, status, addressType} = req.body;

  try {
    const result = await setAddressService(id, houseno, streetno, area, landmark, city, country, zipcode, state, status, addressType);
    res.status(200).json({ message: "New address added", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error in address adding" });
  }
};

export default setAddressController;
