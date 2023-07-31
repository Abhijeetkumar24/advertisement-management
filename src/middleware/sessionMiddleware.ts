import { createClient } from 'redis';
import { Request, Response, NextFunction } from "express";

const sessionMiddleware = async (req: Request, res: Response, next:NextFunction) => {
    const {id} = req.body;
    console.log("hii1");

    try {
        const client = createClient();
        await client.connect();
        const result = await client.exists(JSON.stringify(id));
        console.log("result",result);
        if(!result){
            return res.status(400).json({error: "User are logout, please login again"});
        }
        else{
            next()
        }

    } catch (err) {

    }


}

export default sessionMiddleware;