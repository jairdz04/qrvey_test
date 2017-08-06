const fs = require('fs');
const date = require("../helpers/getDate");
const file = "./data/time_record.json";

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
  find: (id_time_record) => {
    return new Promise((reply, reject) => {
      fs.readFile(file, 'utf8',  (error,data)=> {
        if(error)return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          for(var i in obj){
            if(obj[i].id_time_record == id_time_record){
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
          const newProject = {"id_time_record": parseInt(date.getDate()), "name": params.name,"hours":params.hours , "minutes":params.minutes,"seconds":params.seconds , "finish": params.finish,"description": params.description};
          obj.push(newProject);
          fs.writeFile(file, JSON.stringify(obj), function(err) {
              if(err) return console.log(err);
              return reply({details: "Saved correctly"});
          }); 
      });
    })
  },
  update: (id_time_record, params) => {
    return new Promise((reply, reject) => {
        var bandera = false;
       fs.readFile(file, 'utf8', (error,data)=>{
          if(error) return reject({ details: "error cargando datos", error });
          const obj = JSON.parse(data);
          for(var i in obj){
            if(obj[i].id_time_record == id_time_record){
              obj[i].id_time_record = parseInt(id_time_record);
              obj[i].name = params.name;
              obj[i].hours= params.hours;
              obj[i].minutes= params.minutes;
              obj[i].seconds= params.seconds;
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

    })
  },
  delete: (id_time_record) => {
    return new Promise((reply, reject) => {
          const newData = [];
          var bandera = false;
         fs.readFile(file, 'utf8',  (error,data)=> {
            if(error) return reject({ details: "error cargando datos", error });
            const obj = JSON.parse(data);
            for(var i in obj){
              if(obj[i].id_time_record == id_time_record){
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
  }
}
