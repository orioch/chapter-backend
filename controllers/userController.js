const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const JWT_SECRET = "jwt_secret";

exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Error registering user");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send("Error logging in");
  }
};

exports.getUserProfile = async (req, res) => {
  // Assume user ID is available in request (after authentication)
  try {
    const user = await User.findById(req.user.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("Error fetching user profile");
  }
};

exports.updateUserProfile = async (req, res) => {
  // Assume user ID is available in request (after authentication)
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send("Error updating user profile");
  }
};
