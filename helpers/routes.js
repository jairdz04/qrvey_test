const express = require("express");
const router = express.Router();

//Customers routes
const project = require('../controllers/project_controller');
router.get('/project', project.getAllProjects);
router.get('/project/:id', project.getProjectById);
router.post('/project/add' ,project.postProject);
router.put('/project/edit/:id', project.putProject);
router.delete('/project/delete/:id', project.deleteProject);


const task = require('../controllers/task_controller');
router.get('/task',task.getAllTasks);
router.get('/task/:id',task.getTaskById);
router.post('/task/add' ,task.postTask);
router.put('/task/edit/:id',task.putTask);
router.delete('/task/delete/:id', task.deleteTask);

const time_record = require('../controllers/time_record_controller');
router.get('/time_record', time_record.getAllTimesRecords);
router.get('/time_record/:id', time_record.getTimeRecordById);
router.post('/time_record/add',time_record.postTimeRecord);
router.put('/time_record/edit/:id',time_record.putTimeRecord);
router.delete('/time_record/delete/:id', time_record.deleteTimeRecord);

const auth = require('../controllers/time_record_controller');

module.exports = router;
