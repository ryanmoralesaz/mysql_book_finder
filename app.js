import express, { urlencoded } from "express";
import { engine } from "express-handlebars";
import bookRoutes from "./routes/bookRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

// Set up Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// ... (rest of your express setup)
app.use(urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
app.use("/", bookRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
