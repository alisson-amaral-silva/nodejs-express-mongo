import books from "../models/Book.js";

class BookController {
  static getBookList = (req, res) => {
    books.find((error, books) => {
      res.status(200).json(books);
    });
  };

  static createBook = (req, res) => {
    let book = new books(req.body);
    book.save((error) => {
      if (error)
        res
          .status(500)
          .send({ message: `${error.message} - fail to create a book` });
      else res.status(201).send(book.toJSON());
    });
  };
}

export default BookController;
