import express from "express";
import bodyParser from "body-parser";
import { question } from "./routes";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

//app.use("/api/question",question);
app.post("/register", (req, res) => {
  res.send({
    message: `hi! ${req.body.email}`
  });
  
});
app.listen(process.env.PORT || 3000);
