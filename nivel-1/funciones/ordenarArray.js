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
    // Se genera un número aleatorio entero entro 0 y 100.
    const numeroAleatorio = Math.floor(Math.random() * 100);
    // Se agrega el número creado al final del array.
    arregloACompletar.push(numeroAleatorio);
  }

  // La función retorna un array de 40 números aleatorios.
  return arregloACompletar;
};

// Variable con 40 números aleatorios.
const arregloNumeros = arregloAleatorio();

// Funcion para ordenar un array de números utilizando el método de burbuja.
function ordernarElArray(arrayOriginal) {

  // Se copia el array original.
  const arrayOrdenado = [...arrayOriginal];

  // Se itera el array tantas veces como elementos tenga.
  for (let i = 0; i < arrayOrdenado.length; i++) {
    // Se itera el array - 1 (el último elemento no se compara).
    for (let j = 0; j < arrayOrdenado.length - 1; j++) {

      // Se compara el elemento actual [j] con el siguiente [j + 1].
      if (arrayOrdenado[j] > arrayOrdenado [j + 1]) {
        // Intercambiar los elementos
        // Variable auxiliar para guardar el valor de [j].
        const temp = arrayOrdenado[j];
        // Se asigna el valor de [j + 1] a [j], si [j] es mayor.
        arrayOrdenado[j] = arrayOrdenado[j + 1];
        // arrayOrdenado[j + 1] toma el valor de [j].
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