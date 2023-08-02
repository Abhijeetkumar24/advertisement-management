"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setAddressService_1 = require("../../services/userServices/setAddressService");
const setAddressController = async (req, res) => {
    const { id, houseno, streetno, area, landmark, city, country, zipcode, state, status, addressType } = req.body;
    try {
        const result = await (0, setAddressService_1.setAddressService)(id, houseno, streetno, area, landmark, city, country, zipcode, state, status, addressType);
        res.status(200).json({ message: "New address added", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in address adding" });
    }
};
exports.default = setAddressController;
//# sourceMappingURL=setAddressController.js.map