const co = require("co");
const Project = require("../middlewares/project");

exports.getAllProjects = (req, res)=>{
	co(function*() {
		const projects = yield Project.search();
		res.json(projects);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.getProjectById = (req, res)=>{
	const id_project = req.params.id;
	co(function*() {
		const project = yield Project.find(id_project);
		if(!project) return res.status(404).send({});
		res.json(project);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.postProject = (req, res)=>{
	const params = req.body;
	//console.log(params);
	co(function*() {
		const project = yield Project.add(params);
		res.json(project);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.putProject = (req, res)=>{
	const params = req.body;
	const id_project = req.params.id;
	co(function*() {
		const project = yield Project.update(id_project, params);
		res.json(project);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.deleteProject = (req, res)=>{
	const id_project = req.params.id;
	co(function*() {
		const project = yield Project.delete(id_project);
		res.json(project);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};