const descripcion = {
  alias: "d",
  demand: true,
  desc: "Descripción de la tarea por hacer"
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completado la tarea"
};

const argv = require("yargs")
  .command("crear", "Crea un elemento por hacer", { descripcion })
  .command("borrar", "Borra un elemento por hacer", { descripcion })
  .command("listar", "Listar elementos por hacer", { completado })
  .command("actualizar", "Actualiza el estado completado de una tarea", { descripcion, completado })
  .help().argv;

module.exports = {
  argv
};
