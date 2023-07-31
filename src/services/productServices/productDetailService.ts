import Product from '../../database/models/productModel';

const ProductDetailService = async (id: number) => {

    try {
        const product = await Product.findOne({ where: { userId: id } })

        return product;

    } catch(err){
        throw new Error("Error in feching Product details from services");
    }

}

export default ProductDetailService;