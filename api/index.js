const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api ejercicio");
});

app.get("/upperCase", (req, res) => {
  const text = req.query.text;
  res.json(text.toUpperCase());
  console.log("reformatted");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
