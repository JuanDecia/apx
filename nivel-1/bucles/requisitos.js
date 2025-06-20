/*

   Se tienen que comprar los arreglos para verificar si el usuario tiene
   las habilidades necesarias para cumplir con los requisitos.

*/

const requisitos = ["javascript", "react"];

const usuario = {
  habilidades: ["javascript", "react", "typescript"],
};

// Se inicializa la variable en true para pasar 
// el valor de esta variable a false si el usuario no cumple
// con los requisitos

let cumpleTodos = true;

for (const r in requisitos) {
  const requisito = requisitos[r];

  let encontrado = false;
  // Para cada requisito vamos a recorrer todo el array de habilidades
  // del usuario y ver si este usuario tiene esta habilidad
  
  for ( const habilidad of usuario.habilidades ) {
    // Si el usuario cumple con el requisito, se frena el bucle
    // cambiando el valor de la variable encontrado a true.
    if ( requisito === habilidad) {
        encontrado = true;
        break;
    }
  }

  if (!encontrado) {
    cumpleTodos = false;
  }
}

// Resultado final
if (cumpleTodos) {
  console.log("El usuario cumple con todos los requisitos");
} else {
  console.log("El usuario no cumple con todos los requisitos");
}