import express from "express";
import {question} from './routes'

const app = express();
const PORT = 3000
app.use("/api/question",question);

app.listen(PORT);
