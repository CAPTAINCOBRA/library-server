const Book = require("../models/book");
// const Book = require("../models/buk");

exports.getBookById = (req, res, next, id) => {
  Book.findOne({ id: id }).exec((err, book) => {
    if (err) {
      return res.status(400).json({
        error: "Book not found",
      });
    }
    const log = console.log;
    log(id);
    log(book);
    log("Got book by id");
    req.book = book;
    next();
  });

  // Book.findById(id).exec((err, book) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: "Book not found",
  //     });
  //   }
  //   console.log(id);
  //   req.book = book;
  //   next();
  // });
};

exports.createBook = (req, res) => {
  console.log(req.body);
  const book = new Book(req.body);

  Book.findOne({ id: req.body.id }).exec((err, found) => {
    if (found) {
      return res.status(400).json({
        error: "Book already exists",
        foundBook: found,
      });
    } else {
      book.save((err, data) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: "Not able to save book in DB",
            err,
          });
        }
        res.json({
          message: "Book created successfully",
          data,
        });
      });
    }
  });
};

exports.getBook = (req, res) => {
  console.log("In the getBook method", req.book);
  if (req.book) {
    return res.json(req.book);
  }
  return res.status(400).json({
    error: "Book not found",
  });
  // Book.find().exec((err, books) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: "No books found",
  //     });
  //   }
  //   res.json(books.filter((book) => book.id == req.params.id));
  // });
};

exports.getAllBooks = (req, res) => {
  Book.find().exec((err, books) => {
    if (err) {
      return res.status(400).json({
        error: "No books found",
      });
    }
    res.json(books);
  });
};

exports.updateBook = (req, res) => {
  const book = req.book;
  book.title = req.body.title;
  book.author = req.body.author;
  book.description = req.body.description;
  book.image = req.body.image;
  book.save((err, updatedBook) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(updatedBook);
  });
};

exports.deleteBook = (req, res) => {
  const book = req.book;
  book.remove((err, deletedBook) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Book deleted successfully",
      deletedBook,
    });
  });
};
