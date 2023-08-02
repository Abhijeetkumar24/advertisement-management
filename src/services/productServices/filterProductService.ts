import Product from '../../database/models/productModel';
import { Op } from 'sequelize';


const filterProductService = async (minPrice:number, maxPrice:number) => {

    try {
        console.log(typeof minPrice, typeof maxPrice);
        const product = await Product.findAll({
            where: {
              basePrice: {
                [Op.between]: [minPrice, maxPrice]
              }
            }
          });
        console.log("result:",product);
        return product;

    } catch(err){
        console.log("message:", err);
        throw new Error("Error in filtering products from services");
    }

}

export default filterProductService;