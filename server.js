const express = require("express");
const app = express();
const port = 5000; // Change port from 3000 to 5000

// Middleware to parse JSON bodies
app.use(express.json());

// Route handling
app.get("/", (req, res) => {
  res.send("Branch 2"); // Change from Hello World to Branch 2
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
