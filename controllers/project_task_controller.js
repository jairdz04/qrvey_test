const co = require("co");
const Relation = require("../middlewares/project_task");

exports.getAllRelations = (req, res)=>{
	co(function*() {
		const projects_tasks = yield Relation.search();
		res.json(projects_tasks);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.postRelation = (req, res)=>{
	const params = req.body;
	co(function*() {
		const project_task = yield Relation.add(params);
		res.json(project_task);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};