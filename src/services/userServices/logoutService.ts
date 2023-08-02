// import { createClient } from 'redis';

import Redis from "ioredis";



const logoutService = async (id:string) => {
    
    try {
        const client = new Redis({
            host: '192.168.2.151',
            port: 6379,
          });
          
          
        // const client = createClient();
        // await client.connect();
        // console.log("id3:", id);
        const result= await client.del(id);
        return result;

    } catch (err) {
        console.log(err);
        throw new Error("Error in logout from the service.");
    } 
};

export default logoutService;
