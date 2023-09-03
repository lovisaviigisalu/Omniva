import express, { Express, Request, Response } from "express";
import automaat from "./controller/parcelmachines";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('It works!');
});

app.use("/", automaat);

app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});