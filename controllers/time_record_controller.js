const co = require("co");
const Time = require("../middlewares/time_record");

exports.getAllTimesRecords = (req, res)=>{
	co(function*() {
		const times = yield Time.search();
		res.json(times);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.getTimeRecordById = (req, res)=>{
	const id_time_record = req.params.id_time_record;
	co(function*() {
		const times = yield Time.find(id_time_record);
		if(!times) return res.status(404).send({});
		res.json(times);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});};

exports.postTimeRecord = (req, res)=>{
	const params = req.body;
	co(function*() {
		const times = yield Time.add(params);
		res.json(times);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.putTimeRecord = (req, res)=>{
	const params = req.body;
	const id_time_record = req.params.id_time_record;
	co(function*() {
		const times = yield Time.update(id_time_record, params);
		res.json(times);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};

exports.deleteTimeRecord = (req, res)=>{
	const id_time_record = req.params.id_time_record;
	co(function*() {
		const times = yield Time.delete(id_time_record);
		res.json(times);
	}).catch(error => {
		console.log(error);
		res.status(500).send();
	});
};