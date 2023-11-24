const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// User registration
router.post("/register", userController.register);

// User login
router.post("/login", userController.login);

// Get user profile
router.get("/profile", userController.getUserProfile);

// Update user profile
router.put("/profile", userController.updateUserProfile);

module.exports = router;
