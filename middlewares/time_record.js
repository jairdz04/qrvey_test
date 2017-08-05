const fs = require('fs');
const file = "/data/times";

module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
         return reply("getting values [times]");
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
