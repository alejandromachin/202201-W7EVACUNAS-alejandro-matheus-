const { model, Schema } = require("mongoose");

const vaccineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Vaccine = model("Vaccine", vaccineSchema, "vacunas-collection");

module.exports = Vaccine;
