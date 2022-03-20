import authors from "../models/Author.js";

class AuthorController {
  static getAuthorList = (req, res) => {
    authors.find((error, authors) => {
      res.status(200).json(authors);
    });
  };

  static getAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (error, authors) => {
      if (error)
        res.status(404).send({ message: `${error.message} - author not found` });
      else res.status(200).json(authors);
    });
  };

  static createAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((error) => {
      if (error)
        res
          .status(500)
          .send({ message: `${error.message} - fail to create a author` });
      else res.status(201).send(author.toJSON());
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (error)
        res
          .status(500)
          .send({ message: `${error.message} - fail to update a author` });
      else res.status(201).send({ message: "Author updated Successfully" });
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (error) => {
      if (error)
        res.status(404).send({ message: `${error.message} - author not found` });
      else res.status(204).send({ message: "Author removed Successfully" });
    });
  };
}

export default AuthorController;
