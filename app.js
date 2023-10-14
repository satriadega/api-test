require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Test successful",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;
