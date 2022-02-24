const { model, Schema } = require("mongoose");

const personaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    unique: true,
    required: true,
    length: 9,
  },
  centroDeVacunacion: {
    type: [Schema.Types.ObjectId],
    ref: "Ciudad",
  },
  vacuna: {
    type: [Schema.Types.ObjectId],
    ref: "Vacuna",
  },
  dosis: {
    type: [Date],
  },
});

const Persona = model("Persona", personaSchema, "personas-collection");

module.exports = Persona;
