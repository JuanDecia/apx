/*

  - Importar los módulos "game.js", "questions.js" en "index.js".

  - Utiliza module.exports para exportar el array de preguntas y la función playTrivia.
  - Utiliza require en index.js para importar los módulos.
  - Asegúrate de que la trivia funcione exactamente igual que cuando estaba en un solo archivo.

*/
const questions = require("./questions").preguntas;
const playTrivia = require("./game").playTrivia;

console.log("¡Bienvenido a la Trivia de Node.js!");
playTrivia();
