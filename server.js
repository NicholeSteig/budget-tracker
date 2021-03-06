const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://user1:password1@ds035553.mlab.com:35553/heroku_n1jwctd6", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here

app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});