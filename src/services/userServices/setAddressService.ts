import Address from '../../database/models/addressModel';


export const setAddressService = async (id:number, houseno:string, streetno:number, area:string, landmark:string, city:string, country:string,zipcode:number, state:string, status:string, addressType:string) => {
    
    const newAddress = new Address({
        userId: id,
        houseno,
        streetno,
        area,
        landmark,
        city,
        country,
        zipcode,
        state,
        status,
        addressType
    });
    await newAddress.save();
    return newAddress;
};

// export  setAddressService;

