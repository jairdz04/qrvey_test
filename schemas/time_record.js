const joi = require("joi");

module.exports = {
	time_record: {
		body: {
			id_time_record: joi.any(),
			name: joi.any(),
			description: joi.string(),
			finish: joi.number().min(0).max(1).required(),
			hours: joi.number().required(),
			minutes: joi.number().min(1).max(59).required(),
			seconds: joi.number().min(1).max(59).required()
		}
	}
}
