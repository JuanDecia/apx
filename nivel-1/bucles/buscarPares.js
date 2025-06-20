/*
  Se deben buscar los numeros pares en el arreglo y contar cuantos hay.
  Usar diferentes tipos de buicles para resolver el problema.
*/

// Array con 30 números
const numeros = [12, 7, 19, 24, 36, 45, 22, 17, 10, 8, 33, 50, 29, 40, 60, 72, 91, 81, 6, 2, 3, 9, 15, 21, 28, 14, 88, 53, 64, 97,];

// ####### WHILE #######

// Contador para los números pares
let cantidadParesWhile = 0;
let arregloParesWhile = [];

let iterador = 0;

// Recorrer el arreglo de numeros
while ( iterador < numeros.length ) {
    // Verificar si el número es par
    if ( numeros[iterador] % 2 === 0 ) {
        // Si es par, se guarda en el arreglo para mostrar los pares
        arregloParesWhile.push(numeros[iterador]);
        // Se incrementa el contador de pares
        cantidadParesWhile++
    }

    iterador++;
}

console.log(`Los numeros pares son: ${arregloParesWhile.join(", ")}. En total hay ${cantidadParesWhile} pares.`);

console.log("--------------------------------------------------");


// ####### FOR #######

const numerosFor = [
    1, 3.5, 7, 2.2, 9, 4.8, 15, 6.1, 12, 3.3,
    8, 11.7, 20, 5, 14.6, 18, 7.9, 22, 30, 16.4,
    27, 9.8, 25, 19.2, 10, 23.5, 29, 13, 21.1, 26
  ];  

// Contador
let contadorParFor = 0;
let arregloParesFor = [];

for ( let i = 0; i < numerosFor.length; i++ ) {
    // Verifica si el numero es par
    if ( numerosFor[i] % 2 === 0 ) {
        // Si es par, se guarda en el arreglo
        arregloParesFor.push(numerosFor[i]);
        contadorParFor++;
    }
}

console.log((`Los numeros pares son: ${arregloParesFor.join(", ")}. En total hay ${contadorParFor}.`));

console.log("--------------------------------------------------");

// ######## FOR OF #######

const numerosForOf = [3, 17, 25, 8, 42, 11, 90, 7, 56, 23, 65, 14, 78, 39, 99];
let arregloParesForOf = [];
let contadorParForOf = 0;

// Recorrer el array
for (const num of numerosForOf) {
  
    // Verificar si es par
    if ( num % 2 === 0 ) {

        // Si es par, se guarda en el arreglo y aumenta el contador
        arregloParesForOf.push(num);
        contadorParForOf++;
    }
}


console.log((`Los numeros pares son: ${arregloParesForOf.join(", ")}. En total hay ${contadorParForOf}.`));

console.log("--------------------------------------------------");
