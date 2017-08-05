const joi = require("joi");

module.exports = {
	project: {
		body: {
			id_project: joi.any(),
			name: joi.string(),
			description: joi.string()
		}
	}
}
