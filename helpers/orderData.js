module.exports = {
	orderChronologically: (data,key,callback)=>{
		for(var i in data){
			if(data[i].finish == 1){
			 console.log(data[i]);			
			}
		}
	},

	orderByDay: (data)=>{
		var days = {};
		var values = {};
		for(var i in data){
			if(data[i].finish == 1){
				if(days.indexOf(data[i]) > -1){
					//values.[days.indexOf(data[i])].push({task: data[i]});
				}else{
					days.push(data[i].date);
					//values.push([{task: data[i]}]);
				}
			 console.log(days);
			 console.log(values);			
			}
		}
	}
}

 