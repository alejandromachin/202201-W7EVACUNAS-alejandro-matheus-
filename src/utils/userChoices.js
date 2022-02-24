require("dotenv").config();

const inquirer = require("inquirer");

const userChoices = () =>
  new Promise((resolve) => {
    inquirer
      .prompt([
        {
          name: "queHacer",
          message: "Qué deseas hacer?",
          type: "list",
          choices: [
            "Listar centros de vacunación",
            "Listar personas vacunadas por centro",
            "Introducir vacunas",
            "Introducir personas vacunadas",
          ],
        },
      ])
      .then(({ queHacer }) => {
        resolve({
          queHacer,
        });
      });
  });

const datosPersona = (centrosVacunacion) =>
  new Promise((resolve) => {
    inquirer
      .prompt([
        {
          name: "nombre",
          message: "Nombre",
          type: "input",
        },
        {
          name: "dni",
          message: "DNI",
          type: "input",
        },
        {
          name: "centroDeVacunacion",
          message: "Centro de vacunación",
          type: "list",
          choices: [centrosVacunacion],
        },
        {
          name: "vacunas",
          message: "Centro de vacunación",
          type: "list",
          when: (answers) =>
            answers.name === "Sant Isidor- Centre vacunal CAPSBE",
          choices: ["hola", "adios"],
        },
      ])
      .then(({ nombre, dni, centroDeVacunacion }) => {
        resolve({
          nombre,
          dni,
          centroDeVacunacion,
        });
      });
  });

module.exports = { userChoices, datosPersona };
