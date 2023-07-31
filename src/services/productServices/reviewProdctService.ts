import Review from "../../database/models/reviewModel";

const reviewProductService = async (id:number, productId:number, review:string) => {
    const newReview = new Review({
        userId:id,
        productId,
        review,
    });

    await newReview.save();
    return newReview;
}

export default reviewProductService;