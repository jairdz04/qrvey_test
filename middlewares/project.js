const fs = require('fs');
const file = "/data/project";

module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
         return reply("getting values [project]");
    });
  },
  find: (id_project) => {
    return new Promise((reply, reject) => {
      return reply("finding value [project]");
    })
  },
  add: (params) => {
    return new Promise((reply, reject) => {
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
