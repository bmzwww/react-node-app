// server/index.js

const express = require("express");

const PORT = process.env.PORT || 7001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: `Hello from server! ${req}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});