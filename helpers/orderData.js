module.exports = {
	orderChronologically: (data,callback)=>{
		var finished = [];
		if(data.length > 0){
			for(var i in data){
				if(data[i].finish == 1){
					finished.push(data[i]);
				}
			}
		
			finished.sort((a,b)=>{
				return a.id_task - b.id_task;
			});
			return callback(finished);

		}else{
			return callback("Nothing to sort");
		}
		
	},

	orderByDay: (data, callback)=>{
		var date = "";
		var done = [];
		var records = [];
		var finalArray = [];
		if(data.length > 0){
			for(var i in data){
			records = [];
			date = data[i].date;
				if(done.indexOf(date) == -1){
					for(var j in data){
						if(date == data[j].date && data[j].finish == 1){
							records.push(data[j]);
						}
					}
					done.push(date);
					if(records.length > 0){
						finalArray.push({ date : date, records : records});
					}
				}
			}
			return callback(finalArray);
		
		}else{
			return callback("Nothing to sort");
		}
		
	}
}

 