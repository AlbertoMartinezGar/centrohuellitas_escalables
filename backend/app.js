const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const upload = require("./middleware/upload")

const Event = require("./models/event");

const port = 3030;
const app = express();
app.use('/uploads', express.static('uploads'));
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

//Obtener todos los eventos
app.get("/api/events", (req, res, next) => {
  Event.find({}).then(documents => {
    console.log(documents);
    res.send(documents);
  });
}); 

//Obtener un solo evento
app.get("/api/event/:id", (req, res, next) => {
  let string = req.params.id;
  const stringSplited = string.split("=");
  const id = stringSplited[1];
  Event.findById(id, (err, items) => {
    if (err){
      console.log("error");
      res.status(500).send(err)
    }
    res.status(200).json(items);
  })
});

//Editar un evento
app.put("/api/editevent/:id", (req, res, next) => {
  let string = req.params.id;
  const stringSplited = string.split("=");
  const id = stringSplited[1];
  Event.findByIdAndUpdate(id,{
    nombre: req.query.nombre,
    fecha: req.query.fecha,
    descripcion: req.query.descripcion
  }, function (err){
    if(err){
      return res.send(err);
    }
    else{
      res.status(200).json({
        message: "¡Evento editado con éxito!"
      });
    }    
  })
})

//Añadir un nuevo evento
app.post("/api/addevent", upload.single('image'), (req, res, next) => {
  let event = new Event({
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    descripcion: req.body.descripcion
  });
  if(req.file){
    console.log("tenemos path");
    event.image = req.file.path;
  }
  event.save();
  res.status(201).json({
    message: "Post added successfully"
  });
});

//Eliminar un evento
app.delete("/api/deleteevent/:id", (req, res, next) => {
  Event.findOneAndDelete({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Event deleted!" });
  });
});

module.exports = app;
