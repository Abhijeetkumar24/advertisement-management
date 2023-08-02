import Product from '../../database/models/productModel';

const addProductServices = async ( id:number, productName:string, description:string, title:string, images:string, basePrice:number, currentBid:number,bidderId:number, categoryId:number, addressId:number ) => {
    const newProduct = new Product ({
        userId:id,
        productName,
        description,
        title,
        images,
        basePrice,
        currentBid,
        bidderId,
        categoryId,
        addressId
    })
    await newProduct.save();
    return newProduct

}

export default addProductServices;