const fs = require('fs');
const file = "./data/time_record.json";

module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8', function (error,data) {
        if(error) return reject({ details: "error cargando datos", error });
          return reply(JSON.parse(data));
      });
    });
  },
  find: (id_time_record) => {
    return new Promise((reply, reject) => {
      return reply("finding value [times]");
    })
  },
  add: (params) => {
    return new Promise((reply, reject) => {
      return reply("add value [times]");
    })
  },
  update: (id_time_record, params) => {
    return new Promise((reply, reject) => {
        return reply("update value [times]");
    })
  },
  delete: (id_time_record) => {
    return new Promise((reply, reject) => {
        return reply("Delete value [times]");
    })
  }
}
