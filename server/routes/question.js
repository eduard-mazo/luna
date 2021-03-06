import express from "express";

const app = express.Router();

const question = {
  _id: 1,
  title: "component",
  descripcion: "little example",
  createdAt: new Date(),
  user: {
    fistName: "eduard",
    lastName: "alfonso",
    email: "eduard.mazo@gmail.com",
    pass: "12345"
  }
};

const questions = new Array(10).fill(question);

app.get("/", (req, res) => {
  res.status(200).json(questions);
});

app.get("/:id", (req, res) => {
  res.status(200).json(question);
});

export default app;
