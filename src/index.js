require("dotenv").config();
const debug = require("debug")("vacunas:root");
const connectToDatabase = require("./database");
const listarCentros = require("./utils/listarCentros");
const userChoices = require("./utils/userChoices");

const mongoConnectionString = process.env.MONGO_STRING;

(async () => {
  try {
    await userChoices();

    listarCentros();
    await connectToDatabase(mongoConnectionString);
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
