const fs = require('fs');
const date = require("../helpers/getDate");
const verify = require("../helpers/verifyKeys");
const order = require("../helpers/orderData");
const file = "./data/task.json";
const time = "./data/time_record.json";


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
  find: (id_task) => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8',  (error,data)=> {
        if(error)return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          for(var i in obj){
            if(obj[i].id_task == id_task){
               return reply(obj[i]);
            }
          }
        return reply({details: "no found records"});
      });
    })
  },
  add: (params) => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8', (error,data)=>{
          if(error) return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          verify.task_record(time,params.id_time_record, (result) =>{
            console.log(result);
              if(!result) return reply({details: "Error, id_time_record doesn´t exist"});
              const newProject = {"id_task": parseInt(date.getDate()),"id_time_record": parseInt(params.id_time_record) ,"name": params.name, "date": params.date ,"finish": params.finish,"description": params.description};
              obj.push(newProject);
              fs.writeFile(file, JSON.stringify(obj), function(err) {
                  if(err) return console.log(err);
                  return reply({details: "Saved correctly"});
              }); 
          });
      });
    })
  },
  update: (id_task, params) => {
    return new Promise((reply, reject) => {
        var bandera = false;
       fs.readFile(file, 'utf8', (error,data)=>{
          if(error) return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          verify.task_record(time,params.id_time_record, (result) =>{
              console.log(result);
            if(!result)return reply({details: "Error, id_time_record doesn´t exist"});
               for(var i in obj){
                  if(obj[i].id_task == id_task){
                    obj[i].id_task = parseInt(id_task);
                    obj[i].id_time_record = parseInt(params.id_time_record);
                    obj[i].name = params.name;
                    obj[i].date = params.date;
                    obj[i].finish = params.finish;
                    obj[i].description = params.description;
                    bandera = true;
                  }
                }
                if(bandera){
                    fs.writeFile(file, JSON.stringify(obj), function(error) {
                      if(error) return console.log(error);
                      return reply({details: "Updated correctly"});
                    }); 
                }else{
                   return reply({details: "the record doesnt exist,nothing to update"});           
                }
          });
      });
    })
  },
  delete: (id_task) => {
    return new Promise((reply, reject) => {
          const newData = [];
          var bandera = false;
         fs.readFile(file, 'utf8',  (error,data)=> {
            if(error) return reject({ details: "error cargando datos", error });
            const obj = JSON.parse(data);
            for(var i in obj){
              if(obj[i].id_task == id_task){
                bandera = true;
              }else{
                newData.push(obj[i]);
              }
            } 
            if(bandera = true){
              fs.writeFile(file, JSON.stringify(newData), function(error) {
                  if(error) return reject({ details: "error cargando datos", error })
                  return reply({details: "Deleted correctly"});
              }); 
            }else{
              return reply("no record to delete");                              
            }
        });
    })
  },

  orderByTime: ()=>{
    return new Promise((reply, reject)=>{
      fs.readFile(file, 'utf8', (error, data)=>{
        const obj = JSON.parse(data);
        order.orderChronologically(obj,(callback)=>{
             return reply(callback);
        });
      });
    })
  },

  orderByDay: ()=>{
    return new Promise((reply, reject)=>{
      fs.readFile(file, 'utf8', (error, data)=>{
        const obj = JSON.parse(data);
        order.orderByDay(obj, callback=>{
          console.log(callback);
        });
        return reply({details: "true"});
      });
    })

  }
}
