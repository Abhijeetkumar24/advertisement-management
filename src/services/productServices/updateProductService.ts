import Product from '../../database/models/productModel';

const updateProductServices = async (id: number, productName: string, description: string, title: string, images: string, basePrice: number, currentBid: number, bidderId: number, categoryId: number, addressId: number) => {

    try {
        const product = await Product.findOne({ where: { userId: id } })

        product?.set({
            userId: id,
            productName,
            description,
            title,
            images,
            basePrice,
            currentBid,
            bidderId,
            categoryId,
            addressId
        });

        await product?.save();
        return product;
    } catch(err){
        throw new Error("Error in updating the product");
    }

}

export default updateProductServices;