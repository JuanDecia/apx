/*

  Filtrar un arreglo de strings usando la función "filterByLength".

*/

const arrayStrings = [
  "manzana",
  "banana",
  "cereza",
  "durazno",
  "kiwi",
  "sandía",
  "frambuesa",
  "mango",
  "uva",
  "pera"
];

const filterByLength = (arr, n) => {
    // Filtro para las paralbras del areglo, deben ser mayor
    // o igual al número que se pasa por parámetro.
    return arr.filter (palabra => palabra.length >= n )
}

// Se guarda el resultado de la función en una variable.
const resultado = filterByLength(arrayStrings, 5);

// Funcion Ejecutadora
const main = () => {

    console.log(resultado);
    
}

main();