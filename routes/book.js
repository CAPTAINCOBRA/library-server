const express = require("express");
const {
  getBookById,
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
} = require("../controllers/book");
const router = express.Router();

router.param("bookId", getBookById);

//Create Route
// /api/book
router.post("/book/create", createBook);

//Read Routes
router.get("/book/:bookId", getBook);
router.get("/books", getAllBooks);

//Update Route
router.put("/book/:bookId", updateBook);

//Delete Route
router.delete("/book/:bookId", deleteBook);

module.exports = router;
