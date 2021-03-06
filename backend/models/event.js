const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    fecha: { type: String, required: true },
    descripcion: { type: String, required: true },
    image: {type: String}
}, {collection: 'eventos'});

module.exports = mongoose.model('Event', eventSchema);