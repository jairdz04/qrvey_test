const fs = require('fs');
const date = require("../helpers/getDate");
const file = "./data/project.json";

module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8',  (error,data)=> {
        if(error) return reject({ details: "error cargando datos", error });
          return reply(JSON.parse(data));
      });
    });
  },
  find: (id_project) => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8',  (error,data)=> {
        if(error)return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          for(var i in obj){
            if(obj[i].id_project == id_project){
              console.log("aqui");
               return reply(obj[i]);
            }
          }
        return reply({details: "not found records"});
      });
    })
  },
  add: (params) => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8', (error,data)=>{
          if(error) return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          const newPorject = {"id_project": date.getDate(), "name": params.name, "description": params.description};
          obj.push(newPorject);
          fs.writeFile(file, JSON.stringify(obj), function(err) {
              if(err) return console.log(err);
              return reply({details: "Saved correctly"});
          }); 
      });
    })
  },
  update: (id_project, params) => {
    return new Promise((reply, reject) => {
       fs.readFile(file, 'utf8', (error,data)=>{
          if(error) return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          for(var i in obj){
            if(obj[i].id_project == id_project){
              obj[i].id_project = parseInt(id_project);
              obj[i].name = params.name;
              obj[i].description = params.description;
            }
          }
          fs.writeFile(file, JSON.stringify(obj), function(err) {
              if(err) return console.log(err);
              return reply({details: "Updated correctly"});
          }); 
      });

    })
  },
  delete: (id_project) => {
    return new Promise((reply, reject) => {
          const newData = [];
          var bandera = false;
         fs.readFile(file, 'utf8',  (error,data)=> {
            if(error) return reject({ details: "error cargando datos", error });
            const obj = JSON.parse(data);
            for(var i in obj){
              if(obj[i].id_project == id_project){
                bandera = true;
              }else{
                newData.push(obj[i]);
              }
            } 
            if(bandera = true){
              fs.writeFile(file, JSON.stringify(newData), function(err) {
                  if(err) return console.log(err);
                  return reply({details: "Updated correctly"});
              }); 
            }else{
              return reply("no record to delete");                              
            }
        });
    })
  }
}
