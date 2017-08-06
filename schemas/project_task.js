const joi = require("joi");

module.exports = {
	project_task: {
		body: {
			name_project: joi.string().required(),
			name_task: joi.string().required(),
		}
	}
}
