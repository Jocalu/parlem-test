import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/user/:customerId", (req: Request, res: Response) => {
  res.send({
    _id: 555555,
    docType: "nif",
    docNum: "11223344E",
    email: "it@parlem.com",
    customerId: "11111",
    name: "Enriqueta",
    surname: "Parlem",
    phone: "668668668",
    address: {
      street: "Carrer de la Pau 1",
      zipCode: "08001",
      city: "Barcelona",
      province: "Barcelona",
    },
  });
});

app.get("/api/products/:customerId", (req: Request, res: Response) => {
  res.send([
    {
      _id: 1111111,
      productName: "FIBRA 1000 ADAMO",
      productTypeName: "ftth",
      numeracioTerminal: 933933933,
      soldAt: "2019-01-09 14:26:17",
      customerId: "11111",
    },
    {
      _id: 2222222,
      productName: "FIBRA 1000 ADAMO",
      productTypeName: "lm",
      numeracioTerminal: 32768376,
      soldAt: "2019-01-19 14:26:17",
      customerId: "11111",
    },
  ]);
});

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
