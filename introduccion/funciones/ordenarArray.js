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
    const numeroAleatorio = Math.floor(Math.random() * 100);

    arregloACompletar.push(numeroAleatorio);
  }

  return arregloACompletar;
};

// Variable que contiene el arreglo completo.
const arregloNumeros = arregloAleatorio();

function ordernarElArray(arrayOriginal) {
  const arrayOrdenado = [...arrayOriginal];

  for (let i = 0; i < arrayOrdenado.length; i++) {
    for (let j = 0; j < arrayOrdenado.length - 1; j++) {
      if (arrayOrdenado[j] > arrayOrdenado [j + 1]) {
        // Intercambiar los elementos
        const temp = arrayOrdenado[j];
        arrayOrdenado[j] = arrayOrdenado[j + 1];
        arrayOrdenado[j + 1] = temp;
      }
    }
  }

  return arrayOrdenado;
}

const main = () => {
  console.log("Arreglo original: ", arregloNumeros);
  console.log("Arreglo ordenado:", ordernarElArray(arregloNumeros));
};

main();