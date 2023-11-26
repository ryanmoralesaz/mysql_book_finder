// models/book.js
import db from "../db.js";

async function getAuthorByBookTitle(title) {
  try {
    const [rows] = await db.query(
      `SELECT authors.dob FROM authors JOIN books ON authors.author_id = books.author_id WHERE books.title = ?`,
      [title]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (err) {
    throw err;
  }
}

export { getAuthorByBookTitle };
