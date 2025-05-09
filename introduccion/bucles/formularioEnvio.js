/*

  Validar los datos del formulario de envío, por cada campo vacío
  guardarlos y mostrarlos al final.

*/

const formularioDeEnvio = {
  direccion: "Av. Siempreviva 742",
  nombre: "Juan Pérez",
  ciudad: "",
  codigoPostal: null,
  telefono: "123-456-789",
};

const camposVacios = [];
let indiceCamposVacios = 0;

for (let key in formularioDeEnvio) {
  // recoré todas las propiedades
  // del form de envio y guarda los nombres de las propiedades faltantes
  if (
    formularioDeEnvio[key] === "" ||
    formularioDeEnvio[key] === null ||
    formularioDeEnvio[key] === undefined
  ) {
    camposVacios[indiceCamposVacios] = key;
    indiceCamposVacios++;
  }
}

// Mostrar el resultado
if (camposVacios.length > 0) {
  console.log(
    "Los siguientes campos están vacíos o son inválidos:",
    camposVacios
  );
} else {
  console.log("Todos los campos están completos.");
}
