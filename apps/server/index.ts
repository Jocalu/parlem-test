import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/client", (req: Request, res: Response) => {
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

app.get("/product", (req: Request, res: Response) => {
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
