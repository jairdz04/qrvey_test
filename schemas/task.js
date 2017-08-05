const joi = require("joi");

module.exports = {
	task: {
		body: {
			id_task: joi.any(),
			name: joi.string(),
			date: joi.string(),
			description: joi.string()
		}
	}
}