const joi = require("joi");

module.exports = {
	project: {
		body: {
			id_project: joi.any(),
			id_task: joi.any(),
			name: joi.string(),
			description: joi.string()
		}
	}
}
