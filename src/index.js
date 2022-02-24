require("dotenv").config();
const debug = require("debug")("vacunas:root");
const connectToDatabase = require("./database");
const listarCentros = require("./utils/listarCentros");
const { userChoices, datosPersona } = require("./utils/userChoices");

const mongoConnectionString = process.env.MONGO_STRING;

(async () => {
  try {
    await connectToDatabase(mongoConnectionString);

    await userChoices();

    const centros = await listarCentros();

    console.log(centros);

    await datosPersona(centros[0]);
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
