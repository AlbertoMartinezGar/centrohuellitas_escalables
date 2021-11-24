const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Event = require("./models/event");

const port = 3030;
const app = express();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

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

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/events", (req, res, next) => {
  Event.find({}).then(documents => {
    console.log(documents);
    res.send(documents);
  });
}); 

app.post("/api/newevent", (req, res, next) => {
  console.log({req});
  const event = new Event({
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    descripcion: req.body.descripcion
  });
  event.save();
  res.status(201).json({
    message: "Post added successfully"
  });
});

/*app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
}); */

module.exports = app;
