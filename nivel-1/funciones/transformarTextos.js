/*

  Crear la función "trasnformarFrase".

  La función debe crear una copia del arreglo "frase" con la primera letra
  de cada palabra en mayúscula utilizando el método "map()".
  Cada iteración de "map()", debe convertir la primer letra en mayúscula y
  concatenerla con el resto de la cadena en minúscula, utilizando los métodos
  "chart()" y "slice()".
  Luego, se deben unir las letras de cada palabra utilizando el método "join()".

  Devolver la variable "oracion" desde la función.

*/

function transformarFrase(frase) {

  // Se guarda el arreglo original en una variable
  const arrayDePalabras = frase

  // Se recorre el arreglo dentro de una nueva variable para guardar el resultado.
  // Se utiliza el método "map()" para obtener cada posición del arreglo por separado.
  const fraseMayuscula = arrayDePalabras.map((palabra) => {
    
    // Por cada posición, se toma la primer letra "charAt(0)", y se convierte en
    // mayúscula concatenando el método "toUpperCase()".
    // Se concatena con el método "slice(1)" desde la segunda posición en adelante "(1)".
    // concatenando el método "toLowerCase".
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

  });
  
  // Se guarda el arreglo modificado en "oración" para crear un nuevo arreglo
  // utilizando el método "join(' ')" para juntar todas las posiciones en una sola
  // y separada por un espacio.
  const oracion = fraseMayuscula.join(' ');

  // La función returna el resultado.
  return oracion;
}

function main() {
  const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
  const oracionMayuscula = transformarFrase(frase);
  console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
}

main();