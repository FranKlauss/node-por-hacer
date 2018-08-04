const fs = require("fs");

let listadoPorHacer = [];

const cargarDB = () => {
  try {
    listadoPorHacer = require("./../db/data.json");
  } catch (err) {
    listadoPorHacer = [];
  }
};

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("./db/data.json", data, e => {
    if (e) console.log(`Error: ${e}`);
  });
};

const crear = descripcion => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer);

  guardarDB();

  return porHacer;
};

const getListado = (completado = true) => {
  cargarDB();

  return listadoPorHacer.filter( i => i.completado === completado );
};

const actualizar = (descripcion, completado = true) => {
  let res;
  try {
    cargarDB();

    let item = listadoPorHacer.find(i => {
      return i.descripcion === descripcion;
    });

    if (item) {
      item.completado = completado;
      guardarDB();
      res = true;
    } else {
      console.log(`${descripcion} no se encuentra almacenado`);
      res = false;
    }
  } catch (err) {
    console.log("Error al actualizar");
    res = false;
  }

  return res;
};

const borrar = descripcion => {
  let res;

  try {
    cargarDB();

    let index = listadoPorHacer.findIndex(i => {
      return i.descripcion === descripcion;
    });

    if (index && index >= 0) {
      listadoPorHacer = [
        ...listadoPorHacer.slice(0, index),
        ...listadoPorHacer.slice(index + 1)
      ];
      guardarDB();
      res = true;
    } else {
      res = false;
    }
  } catch (err) {
    console.log("error al borrar");
    res = false;
  }

  return res;
};

module.exports = {
  crear,
  getListado,
  guardarDB,
  actualizar,
  borrar
};
