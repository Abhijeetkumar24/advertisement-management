"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
const dbConnection_1 = __importDefault(require("./database/dbConnection"));
const userModel_1 = __importDefault(require("./database/models/userModel"));
dbConnection_1.default; // not necessary use for printing connected in console
new userModel_1.default();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', indexRoute_1.default);
const port = 6000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map