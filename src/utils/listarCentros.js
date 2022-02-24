const debug = require("debug")("vacunas:root");
const Ciudad = require("../database/models/Ciudad");

const listarCentros = async () => {
  const ciudad = await Ciudad.find();

  ciudad[0].puntosVacunacion.forEach((centroVacunacion) => {
    debug(centroVacunacion[0]);
  });
  return [ciudad[0].puntosVacunacion];
};

module.exports = listarCentros;
