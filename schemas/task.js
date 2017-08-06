const joi = require("joi");

module.exports = {
	task: {
		body: {
			id_task: joi.any(),
			id_time_record: joi.any().required(),
			name: joi.string(),
			date: joi.string().required(),
			finish: joi.number().min(0).max(1).required(),
			description: joi.string()
		}
	}
}
