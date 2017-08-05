const joi = require("joi");

module.exports = {
	project_task: {
		body: {
			name_project: joi.string(),
			name_task: joi.string(),
		}
	}
}
