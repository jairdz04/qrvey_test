module.exports = {
	orderChronologically: (data,key,callback)=>{
		for(var i in data){
			if(data[i].finish == 1){
			 console.log(data[i]);			
			}
		}
	},

	orderByDay: (data, callback)=>{
		//var days = {};
		//var values = {};
		data.sort((a,b)=>{
		  // Turn your strings into dates, and then subtract them
		  // to get a value that is either negative, positive, or zero.
		  return callback(new Date(b.date) - new Date(a.date));
		});
		/*for(var i in data){
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
		}*/
	}
}

 