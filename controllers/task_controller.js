const co = require("co");
const Task = require("../middlewares/task");

exports.getAllTasks = (req, res)=>{
	co(function*() {
		const tasks = yield Task.search();
		res.json(tasks);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.getTaskById = (req, res)=>{
	const id_task = req.params.id_task;
	co(function*() {
		const task = yield Task.find(id_task);
		if(!task) return res.status(404).send({});
		res.json(task);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});};

exports.postTask = (req, res)=>{
	const params = req.body;
	co(function*() {
		const task = yield Task.add(params);
		res.json(task);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};
exports.putTask = (req, res)=>{
	const params = req.body;
	const id_task = req.params.id_task;
	co(function*() {
		const task = yield Task.update(id_task, params);
		res.json(task);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.deleteTask = (req, res)=>{
	const id_task = req.params.id_task;
	co(function*() {
		const task = yield Task.delete(id_task);
		res.json(task);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};