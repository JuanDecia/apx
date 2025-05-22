/*

  - Crear un array con el método math.random() de 40 posiciones.
  - Ordenar el array utilizando el método de burbujeo.
  - Mostrar el resultado por consola.

*/

// Crea un arreglo de 40 numeros
const arregloAleatorio = () => {
  // Array que se completa con un número alearorio en cada iteración.
  const arregloACompletar = [];

  for (i = 0; i < 40; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100)

    arregloACompletar.push(numeroAleatorio);
  }

  return arregloACompletar;
};

// Variable que contiene el arreglo completo.
const arregloNumeros = arregloAleatorio();

function ordernarElArray(arrayOriginal){
  
    const arrayOrdenado = [...arrayOriginal];

    

  return arrayOrdenado;
}

const main = () => {
  
};

main();

