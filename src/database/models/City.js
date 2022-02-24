const { model, Schema } = require("mongoose");

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const City = model("City", citySchema, "ciudades-collection");

module.exports = City;
