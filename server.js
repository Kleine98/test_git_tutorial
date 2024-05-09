const express = require("express");
const app = express();
const port = 5000; // Changed port from 3000 to 5000

// Middleware to parse JSON bodies
app.use(express.json());

// Route handling for the root URL
app.get("/", (req, res) => {
  res.send("Branch 2"); // Changed response from "Hello World" to "Branch 2"
});

// Route handling for the /user endpoint
app.get("/user", (req, res) => {
  res.json({ message: "This is the user endpoint" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
