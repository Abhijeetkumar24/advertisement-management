"use strict";
// import { createClient } from 'redis';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const logoutService = async (id) => {
    try {
        const client = new ioredis_1.default({
            host: '192.168.2.151',
            port: 6379,
        });
        // const client = createClient();
        // await client.connect();
        // console.log("id3:", id);
        const result = await client.del(id);
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error("Error in logout from the service.");
    }
};
exports.default = logoutService;
//# sourceMappingURL=logoutService.js.map