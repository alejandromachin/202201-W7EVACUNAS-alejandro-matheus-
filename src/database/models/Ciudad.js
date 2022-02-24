const { model, Schema } = require("mongoose");

const ciudadSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  puntosVacunacion: {
    type: [Array],
  },
});

const Ciudad = model("Ciudad", ciudadSchema, "ciudades-collection");

module.exports = Ciudad;
