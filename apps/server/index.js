"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/client", (req, res) => {
    res.send({
        _id: 555555,
        docType: "nif",
        docNum: "11223344E",
        email: "it@parlem.com",
        customerId: "11111",
        givenName: "Enriqueta",
        familyName1: "Parlem",
        phone: "668668668",
    });
});
app.get("/product", (req, res) => {
    res.send({
        _id: 1111111,
        productName: "FIBRA 1000 ADAMO",
        productTypeName: "ftth",
        numeracioTerminal: 933933933,
        soldAt: "2019-01-09 14:26:17",
        customerId: "11111",
    });
});
app.listen(port, () => {
    console.log(`⚡️ Server is running at http://localhost:${port}`);
});
