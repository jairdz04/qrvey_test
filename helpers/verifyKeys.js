const fs = require('fs');

module.exports = {
	task_record: (file, id_time_record, callback)=>{
		 return new Promise((reply, reject) => {
		 	fs.readFile(file, 'utf8',  (error,data)=> {
			 	if(error) return reject({ details: "error cargando datos", error });
			 	const obj = JSON.parse(data);
			 	for(var i in obj){
			 		if(obj[i].id_time_record == id_time_record){
			 			return callback(true);
			 		}
			 	}
		 		return callback(false);
		 	});
		 });
		 
	},
	project: (file_project, id_project, callback)=>{
		return new Promise((reply, reject)=>{
			fs.readFile(file_project, 'utf8',  (error,data)=> {
				if(error) return reject({ details: "error cargando datos", error });
				const obj = JSON.parse(data);
				for(var i in obj){
			 		if(obj[i].id_project == id_project){
			 			return callback(true);
			 		}
			 	}
			 	 return callback(false);
			});
		});
	},
	task: (file_task,id_task, callback)=>{
		return new Promise((reply, reject)=>{
			 fs.readFile(file_task, 'utf8',  (error,data)=> {
			 	if(error) return reject({ details: "error cargando datos", error });
			 	const obj = JSON.parse(data);
			 	for(var i in obj){
			 		if(obj[i].id_task == id_task){
			 			return callback(true);
			 		}
			 	}
			 	return callback(false);
			 });
		})
	}
}

 