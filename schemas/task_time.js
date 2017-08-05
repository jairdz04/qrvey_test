const joi = require("joi");

module.exports = {
	task_time: {
		body: {
			name_task: joi.string(),
			name_time: joi.string()
		}
	}
}
