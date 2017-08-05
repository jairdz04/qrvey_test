const fs = require('fs');
const file = "./data/task.json";

module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8', function (error,data) {
        if(error) return reject({ details: "error cargando datos", error });
          return reply(JSON.parse(data));
      });
    });
  },
  find: (id_task) => {
    return new Promise((reply, reject) => {
      return reply("finding value [tasks]");
    })
  },
  add: (params) => {
    return new Promise((reply, reject) => {
      return reply("add value [tasks]");
    })
  },
  update: (id_task, params) => {
    return new Promise((reply, reject) => {
        return reply("update value [tasks]");
    })
  },
  delete: (id_task) => {
    return new Promise((reply, reject) => {
        return reply("Delete value [tasks]");
    })
  }
}
