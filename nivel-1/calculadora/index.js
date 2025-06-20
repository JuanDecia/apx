// Importa el módulo con el objeto de las operaciones
const operaciones = require('./operaciones.js');

// Parsear argumentos de la línea de comandos
const parsearOperacion = (arg) => {

const match = arg.match(/(\d+)([+\-*/])(\d+)/);
  if (!match) return null; // si no coincide con el formato esperado

  return {
    operando1: Number(match[1]), // Primer operando
    operando2: Number(match[3]), // Segundo operando
    operacion: match[2] // Operación (suma, resta, etc.)
  };
}

// Módulo para operar con las operaciones
const ejecutarOperacion = (objetoOperacion) => {
    console.log(objetoOperacion);

    const mapa = {
        "+": operaciones.sumar,
        "-": operaciones.restar,
        "*": operaciones.multiplicar,
        "/": operaciones.dividir
    }

    const simbolo = objetoOperacion.operacion;
    const ejecutor = mapa[simbolo];

    return ejecutor(objetoOperacion.operando1, objetoOperacion.operando2);
}

const main = () =>{

    const operacionParseada = parsearOperacion(process.argv[2]);

    const resultado = ejecutarOperacion(operacionParseada);

    console.log("Resultado:", resultado);;
    
}

main();