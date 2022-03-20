import express from "express";
import AuthorController from "../controller/authorController.js";

const router = express.Router();

router.get('/authors', AuthorController.getAuthorList);
router.get('/authors/:id', AuthorController.getAuthorById);
router.post('/authors', AuthorController.createAuthor);
router.put('/authors/:id', AuthorController.updateAuthor);
router.delete('/authors/:id', AuthorController.deleteAuthor);


export default router;