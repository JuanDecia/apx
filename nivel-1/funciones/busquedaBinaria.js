// Variable a recorrer.
const listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

// Función busquedaBinaria, recibe una lista de números y el número a buscar.
const busquedaBinaria = (numeros, busqueda) => {
  // Se inicializan las variables desde, hasta y ultimaPosicion para representar los índices del arreglo.
  let desde = 0;
  let ultimaPosicion = numeros.length - 1;
  let hasta = ultimaPosicion;

  // Mientras el índice desde sea menor o igual al índice "hasta", se sigue buscando el número en la lista.
  while (desde <= hasta) {
    // Se calcula el índice del elemento del medio de la lista.
    const laMitad = Math.floor((desde + hasta) / 2);
    // Se obtiene el valor del elemento del medio.
    const numeroDelMedio = numeros[laMitad];
    // Si el valor del elemento del medio es igual al número buscado, se devuelve su posición en el arreglo.
    if (numeroDelMedio == busqueda) {
      return laMitad;
    }
    // Si el valor del elemento del medio es mayor al número buscado, se busca en la mitad izquierda del arreglo.
    if (numeroDelMedio > busqueda) {
      hasta = laMitad - 1;
    }
    // Si el valor del elemento del medio es menor al número buscado, se busca en la mitad derecha del arreglo.
    else {
      desde = laMitad + 1;
    }
  }
  // Si el número no se encuentra en el arreglo, se devuelve -1.
  return -1;
}

// Variable llamada "donde" que almacena el resultado de llamar a la función busquedaBinaria con la lista de números y el número a buscar.
const donde = busquedaBinaria(listaDeNumeros, 987);

// Se imprime en consola un mensaje indicando la posición donde se encontró el número y el número mismo.
console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);
