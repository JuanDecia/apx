/*

  Se propone hacer este bloque con la metodología TDD. Se debe crear una
  función que cuente las palabras que tiene el 'string' que reciba y además
  devuelve cuantas palabras comienzan con la palabra A.

  La función debe retornar un objeto con la siguiente estructura como ejemplo:

  { cantidadDePalabras: number, comienzanConA: number }

*/

// Escribir acá la función cuentaPalabras
const cuentaPalabras = (texto) => {

    console.log(`Texto recibido: ${texto}`);

    // Se divide el texto en palabras
    const palabras = texto.split(" ");
    console.log(`Texto dividido en palabras: ${palabras}`);

    // Se cuenta la cantidad de palabras
    const cantidadDePalabras = palabras.length;
    console.log(`Cantidad de palabras: ${cantidadDePalabras}`);    

    // Se cuentas las que comienzan con 'A
    const palabrasConA = palabras.filter(palabra => palabra.toLowerCase().startsWith('a')).length;
    console.log(`Palabras que con A: ${palabrasConA}`);

    // Se retorna el objeto con los resultados
    return {
        cantidadDePalabras: cantidadDePalabras,
        palabrasConA: palabrasConA
    }
}

// Metodologia TDD: Testear la función cuentaPalabras
function testCuentaPalabras() {

  // Texto de prueba
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";

  // Resultado esperado  
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

// Función principal ejecutadora
function main() {
  testCuentaPalabras();
}

main();