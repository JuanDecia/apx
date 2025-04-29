/*
  Se debe detener el while, sumando el contador.

  DETALLE:
    - Si en la condición se declara "contador < 50" el bucle se detiene en 49.
      porque la condición se evalua antes de entrar al bucle. Es decir, evalua
      si "counter" es menor a 50, si es verdadero entra y si no finaliza.

    - Si se declara "contador <= 50" el bucle si se detiene en 50.
*/

// Contador
let counter = 0;

while(counter < 50){
  console.log(counter);
  counter++; // Suma el contador por cada iteración hasta 49
}