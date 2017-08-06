const joi = require("joi");

module.exports = {
	project_task: {
		body: {
			id_project: joi.number().required(),
			id_task: joi.number().required(),
		}
	}
}
