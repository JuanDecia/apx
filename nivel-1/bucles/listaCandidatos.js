/*

  Se debe guardar el número índice del candidato que cumpla con los requisitos
  para luego poder buscarlos en el array ed usuarios.

*/

const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["typescript", "react"] },
  { nombre: "Martín", habilidades: ["react", "next.js"] },
  { nombre: "Julián", habilidades: ["javascript", "typescript"] },
  { nombre: "Lucía", habilidades: ["inglés", "react"] },
  { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
];

const aviso = {
  compania: "TechFlow",
  texto:
    "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
  requisitos: ["typescript", "react"],
};

const candidatos = [];
let indiceCandidatos = 0;

// Lógica para encontrar candidatos
for (const index in usuarios) {
  const usuario = usuarios[index];

  // inicializamos en true porque asumimos que cumple con todos los requisitos
  let cumpleRequisitos = true;

  for (const requisito of aviso.requisitos) {
    // Asumimos que el usuario no cumple con este requisito
    let cumpleRequisito = false;

    // Recorremos las habilidades del usuario para buscar el requisito
    for (const habilidad of usuario.habilidades) {
      if (habilidad === requisito) {
        cumpleRequisito = true; // Si encontramos el requisito, marcamos como cumplido
        break; // Salimos del bucle porque no necesitamos seguir buscando
      }
    }

    // Si no cumple con este requisito, cambiamos cumpleRequisitos a false
    if (!cumpleRequisito) {
      cumpleRequisitos = false;
      break; // Salimos porque ya sabemos que el usuario no cumple
    }
  }

  // Si cumple todos los requisitos, guardamos el número de indice
  // de ese usuario para poder encontrarlo después
  if (cumpleRequisitos) {
    candidatos[indiceCandidatos++] = index;
  }
}

console.log("Indices de usuarios que cumplen con los requisitos:", candidatos);
// completá la lógica necesaria para usar
// los indices guardados en el array 'candidatos'
// y mostrar los usuarios que cumplen con los requisitos

for (const index in candidatos) {
  const indice = candidatos[index];
  console.log(indice);
  

  console.log(`El usuario ${usuarios[indice].nombre} cumple con los requisitos. ${usuarios[indice].habilidades}`);
}
