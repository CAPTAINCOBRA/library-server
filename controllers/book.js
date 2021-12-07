const Book = require("../models/book");

exports.getBookById = (req, res, next, id) => {
  Book.findById(id).exec((err, book) => {
    if (err) {
      return res.status(400).json({
        error: "Book not found",
      });
    }
    console.log(id);
    req.book = book;
    next();
  });
};

exports.createBook = (req, res) => {
  const book = new Book(req.body);
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
};
