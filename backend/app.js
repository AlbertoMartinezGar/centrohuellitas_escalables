const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use(require("./routes/pet.route"));
app.use(require("./routes/event.route"));

const port = 3030;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/test"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

module.exports = app;
