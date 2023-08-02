import Product from '../../database/models/productModel';


const deleteProductService = async (id: any) => {
    
    try {
        const result = await Product.destroy({where:{userId:id} }); 
        return result;
    } catch (err) {
        console.log(err);
        throw new Error("Error in deleting product from the service.");
    } 
};

export default deleteProductService;
