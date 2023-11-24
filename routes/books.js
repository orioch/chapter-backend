const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Get all books
router.get("/", bookController.getAllBooks);

// Get a single book by ID
router.get("/:id", bookController.getBookById);

// Add a new book
router.post("/", bookController.addBook);

// Update a book
router.put("/:id", bookController.updateBook);

// Delete a book
router.delete("/:id", bookController.deleteBook);

// Add a rating to a book
router.post("/:id/rate", bookController.addRating);

// Add a review to a book
router.post("/:id/review", bookController.addReview);

module.exports = router;
