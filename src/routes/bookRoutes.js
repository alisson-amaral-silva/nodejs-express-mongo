import express from "express";
import BookController from "../controller/bookController.js";

const router = express.Router();

router.get('/books', BookController.getBookList);

export default router;