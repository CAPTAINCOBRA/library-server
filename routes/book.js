const express = require("express");
const { getBookById, createBook } = require("../controllers/book");
const router = express.Router();

router.param("id", getBookById);

//Create Route
// /api/book/:id
router.post("/book/create", createBook);

module.exports = router;
