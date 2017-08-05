const fs = require('fs');
const file = "./data/project.json";

module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8', function (error,data) {
        if(error) return reject({ details: "error cargando datos", error });
          return reply(JSON.parse(data));
      });
    });
  },
  find: (id_project) => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8', function (error,data) {
        if(error)return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          for(var i in obj){
            if(obj[i].id_project == id_project){
               return reply(obj[i]);
            }
          }
        return reply({details: "not found records"});
      });
    })
  },
  add: (params) => {
    return new Promise((reply, reject) => {
      //no debe aceptar nombres iguales
      return reply("add value [project]");
    })
  },
  update: (id_project, params) => {
    return new Promise((reply, reject) => {
        return reply("update value [project]");
    })
  },
  delete: (id_project) => {
    return new Promise((reply, reject) => {
        return reply("Delete value [project]");
    })
  }
}
