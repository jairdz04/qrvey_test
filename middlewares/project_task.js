const fs = require('fs');
const date = require("../helpers/getDate");
const verify = require("../helpers/verifyKeys");
const file = "./data/project_task.json";
const task = "./data/task.json";
const project = "./data/project.json";

module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8',  (error,data)=> {
        if(error) return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
            if(obj.length > 0){
              return reply(JSON.parse(data));
            }else{
              return reply({details: "no records found"});
            }
      });
    });
  },
  add: (params) => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8', (error,data)=>{
          if(error) return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          verify.project(project,params.id_project, (result) =>{
             verify.task(task,params.id_task,(result2) =>{
                if(!result || !result2)return reply({details: "Error, some key doesn´t exist"});
                const newProject = {"id_project": params.id_project, "id_task": params.id_task};
                obj.push(newProject);
                fs.writeFile(file, JSON.stringify(obj), function(err) {
                    if(err) return console.log(err);
                    return reply({details: "Saved correctly"});
                }); 
             });
          });
      });
    })
  }
}