/*

  El objetivo es crear 3 funciones, donde va a haber una función principal
  llamada "main()" que va a contener a las demás. Esta función main() va a 
  trabajar como función ejecutadora del programa.

  De las dos funciones restantes, una va a recibir números y la otra puede
  recibir strings, objetos o arreglos. Estas no pueden realizar "logs", lo
  debemos hacer dentro de "main()".

  Luego, dentro de la función ejecutadora, realizamos algunas intrucciones para
  hacer trabajar en conjunto a las tres funciones simultaneamente pero
  estructuradas correctamente dentro del código js.

*/


const saludo = (nombre, apellido) => {
    return `Hola ${nombre} ${apellido} invocaste tu función correctamente.`;
};

const suma = (numeroA, numeroB) => {
    return `El resultado de la suma es: ${numeroA + numeroB}.`
}

const main = () => {

    console.log(saludo("Juan", "Decia"));
    console.log(suma(2, 2));
        
}

main();