import books from "../models/Book.js";

class BookController {
  static getBookList = (req, res) => {
    books.find((error, books) => {
      res.status(200).json(books);
    });
  };
}

export default BookController;
