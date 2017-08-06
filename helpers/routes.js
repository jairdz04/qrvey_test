const express = require("express");
const validate = require("express-validation");
const router = express.Router();

//Customers routes
const project = require('../controllers/project_controller');
const sch_project = require('../schemas/project');
router.get('/project', project.getAllProjects);
router.get('/project/:id', project.getProjectById);
router.post('/project/add' , validate(sch_project.project),project.postProject);
router.put('/project/edit/:id', validate(sch_project.project), project.putProject);
router.delete('/project/delete/:id', project.deleteProject);


const task = require('../controllers/task_controller');
const sch_task = require('../schemas/task');
router.get('/task',task.getAllTasks);
router.get('/task/:id',task.getTaskById);
router.post('/task/add',validate(sch_task.task) ,task.postTask);
router.put('/task/edit/:id',validate(sch_task.task),task.putTask);
router.delete('/task/delete/:id', task.deleteTask);

const time_record = require('../controllers/time_record_controller');
const sch_time = require('../schemas/time_record');
router.get('/time_record', time_record.getAllTimesRecords);
router.get('/time_record/:id', time_record.getTimeRecordById);
router.post('/time_record/add',validate(sch_time.time_record),time_record.postTimeRecord);
router.put('/time_record/edit/:id',validate(sch_time.time_record),time_record.putTimeRecord);
router.delete('/time_record/delete/:id', time_record.deleteTimeRecord);

const auth = require('../controllers/time_record_controller');

module.exports = router;
