const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  readingPreferences: {
    fontSize: Number,
    theme: String,
  },
  progressTracking: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
      currentPage: Number,
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
