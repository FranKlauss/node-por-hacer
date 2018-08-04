const argv = require("./config/yargs").argv;
const colors = require("colors");

const {
  crear,
  getListado,
  actualizar,
  borrar
} = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tareaPorHacer = crear(argv.d);
    console.log(tareaPorHacer);
    break;

  case "listar":
    let listado = getListado(argv.c);
    for (let i = 0; i < listado.length; i++) {
      const item = listado[i];
      console.log(`========= Por Hacer ==========`.green);
      console.log(`${item.descripcion}`);
      console.log(`Estado: ${item.completado}`);
      console.log(`==============================`.green);
    }
    break;

  case "actualizar":
    let actualizado = actualizar(argv.descripcion, argv.completado);
    console.log("Actualizado: ", actualizado);
    break;

  case "borrar":
    let borrado = borrar(argv.descripcion);
    console.log("Borrado: ", borrado);
    break;

  default:
    console.log("Comando no reconocido");
    break;
}
