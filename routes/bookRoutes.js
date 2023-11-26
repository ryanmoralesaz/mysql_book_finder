// Assuming this is in one of your route files
import { Router } from "express";
const router = Router();
import { getAuthorByBookTitle } from "../models/book.js";

// Add this route to handle the root URL
router.get("/", (req, res) => {
  res.render("index", { author: null }); // Render view without author data
});

router.get("/books", async (req, res) => {
  try {
    const title = req.query.title;
    const author = await getAuthorByBookTitle(title);
    res.render("index", { author });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
