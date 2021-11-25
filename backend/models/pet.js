const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    edad: { type: String, required: true },
    sexo: { type: String, required: true },
    image: {type: String}
}, {collection: 'mascotas'});

module.exports = mongoose.model('Pet', eventSchema);