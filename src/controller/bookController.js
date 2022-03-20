import books from "../models/Book.js";

class BookController {
  static getBookList = (req, res) => {
    books
      .find()
      .populate("author")
      .exec((error, books) => {
        res.status(200).json(books);
      });
  };

  static getBookById = (req, res) => {
    const id = req.params.id;
    books
      .findById(id)
      .populate("author", "name")
      .exec((error, books) => {
        if (error)
          res
            .status(404)
            .send({ message: `${error.message} - book not found` });
        else res.status(200).json(books);
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

  static updateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (error)
        res
          .status(500)
          .send({ message: `${error.message} - fail to update a book` });
      else res.status(201).send({ message: "Book updated Successfully" });
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (error) => {
      if (error)
        res.status(404).send({ message: `${error.message} - book not found` });
      else res.status(204).send({ message: "Book removed Successfully" });
    });
  };

  static getBookByEditor = (req, res) => {
    const editor = req.query.editor;
    books.find({ editor: editor }, {}, (error, books) => {
      if (error)
        res.status(404).send({ message: `${error.message} - book not found` });
      else res.status(200).json(books);
    });
  };
}

export default BookController;
