import express from "express";
import db from "./config/db.Connect.js";
import books from './models/Book.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, "connection error"));

db.once('open',() => {
    console.log("Database connection established");
});

const app = express();

app.use(express.json());

routes(app);

app.post("/books", (req, res) => {
  res.status(201).send("Book list");
});

app.put("/books/:id", (req, res) => {
  res.status(204).send("Book list");
});

app.delete("/books/:id", (req, res) => {
  res.status(204).send("Book list");
});

function getBook(id) {}

export default app;
