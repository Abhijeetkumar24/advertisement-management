"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAddressService = void 0;
const addressModel_1 = __importDefault(require("../../database/models/addressModel"));
const setAddressService = async (id, houseno, streetno, area, landmark, city, country, zipcode, state, status, addressType) => {
    const newAddress = new addressModel_1.default({
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
exports.setAddressService = setAddressService;
// export  setAddressService;
//# sourceMappingURL=setAddressService.js.map