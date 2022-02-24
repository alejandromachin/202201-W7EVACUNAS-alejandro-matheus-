const { model, Schema } = require("mongoose");

const ciudadSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  puntosVacunacion: {
    type: [Schema.Types.ObjectId],
  },
});

const Ciudad = model("Ciudad", ciudadSchema, "ciudades-collection");

module.exports = Ciudad;
