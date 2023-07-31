import Product from '../../database/models/productModel';


 

const categoryIdService = async (productId: number) => {
    
    try {

        const product:any = await Product.findOne({where:{id: productId} }); 
        const categoryId = product?.categoryId;
        return categoryId;
    } catch (err) {
        console.log(err);
        throw new Error("Error in fetching cateory ID from the service.");
    } 
};

export default categoryIdService;
