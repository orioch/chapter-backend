
const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (err) {
        res.status(500).send('Error fetching books');
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).send('Error fetching book');
    }
};

exports.addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).send('Book added successfully');
    } catch (err) {
        res.status(500).send('Error adding book');
    }
};

exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).send('Error updating book');
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).send('Book deleted successfully');
    } catch (err) {
        res.status(500).send('Error deleting book');
    }
};

// Example placeholder functions for adding a rating and a review
exports.addRating = async (req, res) => {
    // Logic for adding a rating to a book
};

exports.addReview = async (req, res) => {
    // Logic for adding a review to a book
};
