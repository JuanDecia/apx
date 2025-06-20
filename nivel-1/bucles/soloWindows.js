/*

  Imprimir en consola las computadoras que solo tienen windows como
  sistema operativo. Se deben usar bucles: while, for y for of.

*/

const computadoras = [
  { nombre: "Asus", sistema_operativo: "Windows" },
  { nombre: "Macbook", sistema_operativo: "macOS" },
  { nombre: "Dell", sistema_operativo: "Windows" },
  { nombre: "Lenovo", sistema_operativo: "Linux" },
  { nombre: "HP", sistema_operativo: "Windows" },
];

// ####### WHILE #######

// Arreglo para agrupar las computadoras con Windows
let computadoraWindows = [];
// Auxiliar contador para la posición del arreglo
let indiceComputadoraWindows = 0;

let i = 0;
while ( i < computadoras.length ) {

    // Verificar si el sistema operativo es windows
    if ( computadoras[i].sistema_operativo === "Windows" ) {
        // Si es Windows, se guarda en el arreglo. Se usa la posición iterada
        // para guardar la computadora en el arreglo.
        computadoraWindows[indiceComputadoraWindows] = computadoras[i];

        // Se incrementa el contador auxiliar para pasar
        // a la siguiente posición del arreglo.
        indiceComputadoraWindows++;
    }

    i++;
}

console.log(computadoraWindows);
console.log("--------------------------------------------------");

// ####### FOR #######

let computadorasWindowsFor = [];

for ( let i = 0; i < computadoras.length; i++ ) {

    //verificar sistema operativo
    if ( computadoras[i].sistema_operativo === "Windows" ) {

        // Si es guardarlo en el arreglo
        computadorasWindowsFor.push(computadoras[i]);

    }
}

console.log(computadorasWindowsFor);
console.log("--------------------------------------------------");

// ####### FOR OF #######

let computadorasWindowsForOf = [];

for (const compu of computadoras) {

    // Verificar sistema operativo
    if ( compu.sistema_operativo === "Windows" ) {
        computadorasWindowsForOf.push(compu);
    }
}

console.log(computadorasWindowsForOf);
