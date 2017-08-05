const joi = require("joi");

module.exports = {
	time_record: {
		body: {
			id_time_record: joi.any(),
			name: joi.any(),
			hours: joi.number(),
			minutes: joi.number().min(1).max(59),
			seconds: joi.number().min(1).max(59),
			description: joi.string()
		}
	}
}
