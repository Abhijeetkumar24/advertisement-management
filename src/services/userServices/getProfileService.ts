import User from '../../database/models/userModel';


const getProfileService = async (id: any) => {
    
    try {
        const result = await User.findOne({where:{ id} }); 
        return result;
    } catch (err) {
        console.log(err);
        throw new Error("Error in post fetching from the service.");
    } 
};

export default getProfileService;
