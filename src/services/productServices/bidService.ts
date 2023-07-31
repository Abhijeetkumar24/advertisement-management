import Product from '../../database/models/productModel';

const bidServices = async (id: number, productId: number, newBid: number) => {

    try {
        const product: any = await Product.findOne({ where: { id: productId } })

        if (newBid > product?.basePrice && newBid > product?.currentBid) {

            product?.update(
                {
                    bidderId: id,
                    currentBid: newBid
                }
            )

            await product?.save();
            return product;
        }
        // else {
        //     return "Give biding amount bigger than basePrice and current bid";
        // }
        

    } catch (err) {
        throw new Error("Error bid addition ");
    }

}

export default bidServices;