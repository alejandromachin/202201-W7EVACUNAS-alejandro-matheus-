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

module.exports = userChoices;
