const esPar = (numero) => {
    return numero % 2 === 0;
}

const testEsPar = () => {
    console.assert(esPar(2) === true, 'Test 1 fallido: debería ser par');
    console.assert(esPar(3) === false, "Test 2 fallido: debería ser impar");
    console.assert(esPar(0) === true, "Test 3 fallido: cero es par");

    console.log("Todas las pruebas pasaron correctamente.");
    
}

const main = () => {
    testEsPar();
}

main();