require("dotenv").config();
const debug = require("debug")("vacunas:root");
const connectToDatabase = require("./database");
const userChoices = require("./utils/userChoices");

const mongoConnectionString = process.env.MONGO_STRING;

(async () => {
  try {
    const { queHacer } = await userChoices();
    console.log(queHacer);
    await connectToDatabase(mongoConnectionString);
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
