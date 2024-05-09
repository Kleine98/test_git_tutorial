const express = require("express");
const app = express();
const port = 5000; // Changed port from 3000 to 5000

// Middleware to parse JSON bodies
app.use(express.json());

// Route handling for the root URL
app.get("/", (req, res) => {
  res.send("Branch 1"); // Changed response from "Hello World" to "Branch 1"
});

// Route handling for a custom endpoint
app.get("/custom", (req, res) => {
  res.json({ message: "This is a custom endpoint" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
