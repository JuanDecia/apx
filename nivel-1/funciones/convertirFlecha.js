/*

Convertir a funcion flecha la siguiente función.

function obtenerNumerosPares(numeros) {
  const numerosPares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }
  return numerosPares;
}

*/

const obtenerNumerosPares = (numeros) => {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    return numerosPares;
};
