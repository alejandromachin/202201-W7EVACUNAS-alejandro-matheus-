const { model, Schema } = require("mongoose");

const vacunaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  dosis: {
    type: Number,
  },
});

const Vacuna = model("Vacuna", vacunaSchema, "vacunas-collection");

module.exports = Vacuna;
