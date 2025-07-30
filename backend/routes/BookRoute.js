const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Book = require("../model/BookSchema");
const { title } = require("process");
const auth = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.get("/", auth, async (req, res) => {
  try {
    const bookList = await Book.find({ user: req.userId });
    res.status(200).json({
      count: bookList.length,
      data: bookList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Book.findOne({
      _id: req.params.id,
      user: req.userId,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/title/:title", auth, async (req, res) => {
  try {
    const title = req.params.title;
    const response = await Book.findOne({
      title: { $regex: new RegExp(`^${title}$`, "i") },
      user: req.userId,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/genre/:genre", auth, async (req, res) => {
  try {
    const genre = req.params.genre;
    const response = await Book.find({
      genre: { $regex: new RegExp(`^${genre}$`, "i") },
      user: req.userId,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const bookDetails = req.body;
    bookDetails.user = req.userId;
    if (req.file) {
      bookDetails.image = req.file.filename;
    }
    const newBook = new Book(bookDetails);
    const response = await newBook.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findOne({ _id: req.params.id, user: req.userId });
    if (!book) return res.status(403).json({ message: "Unauthorized" });
    const bookData = req.body;
    if (req.file) {
      bookData.image = req.file.filename;
    }
    const response = await Book.findByIdAndUpdate(id, bookData);
    res.status(200).json({ message: "Data Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, user: req.userId });
    if (!book) return res.status(403).json({ message: "Unauthorized" });
    const id = req.params.id;
    const response = await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Data Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
