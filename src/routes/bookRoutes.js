import express from "express";
import BookController from "../controller/bookController.js";

const router = express.Router();

router.get('/books', BookController.getBookList);
router.post('/books', BookController.createBook);


export default router;