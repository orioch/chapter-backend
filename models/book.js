
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedYear: Number,
    genres: [String],
    summary: String,
    content: [{
        pageNumber: Number,
        text: String
    }],
    audiobookLink: String,
    ratings: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number
    }],
    reviews: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        review: String
    }]
});

module.exports = mongoose.model('Book', bookSchema);
