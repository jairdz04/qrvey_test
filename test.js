const expect  = require('chai').expect;
const req = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const server = require('./server');
chai.use(chaiHttp);

var options = {
    url: 'http://localhost',
    port: 3000,
};
describe('Gets', function() {
    describe ('Proving getters ', function() {
        it('get projects', function(){
            req('http://localhost:3000/api/project', function(error,response, body) {
                console.log(body);
                expect(response.statusCode).to.equal(200);
            });
        });

        it('get tasks', function() {
          req('http://localhost:3000/api/task' , function(error,response, body) {
                console.log(body);
             	expect(response.statusCode).to.equal(200);
            });
        });

        it('get time_records', function() {
          req('http://localhost:3000/api/time-record' , function(error,response, body) {
                console.log(body);
             	expect(response.statusCode).to.equal(200);
            });
        });
        it('get project_task', function() {
          req('http://localhost:3000/api/project-task' , function(error,response, body) {
                console.log(body);
             	expect(response.statusCode).to.equal(200);
            });
        });
	});
});

describe('Gets by id', function() {
    describe ('Proving gets by id', function() {
        it('get by id project', function(){
            var id_project = 201786113127;
        	chai.request(server)
            .get('/api/project/' + id_project)
            .end((err, res) => {
                res.should.have.status(200);
              	done();
            });
        });

        it('get by id task', function() {
         	var id_task = 201786102936;
        	chai.request(server)
            .get('/api/task/' + id_task)
            .end((err, res) => {
                res.should.have.status(200);
              	done();
            });
        });

        it('get by id time_record', function() {
         	var id_time_record = 201786103155;
        	chai.request(server)
            .get('/api/time-record/' + id_time_record)
            .end((err, res) => {
                res.should.have.status(200);
              	done();
            });
        });
	});
});


describe('Posts', ()=> {
    describe ('proving posts', ()=> {
    	it('post projects',(done)=> {
		    var project = {
	            name: "test project",
	            description: "Mocha test project"
	        }
		     chai.request(server)
		    .post('/api/project/add')
		    .send(project)
		    .end(function(err, res) {
		        if (err) done(err);
		        res.should.have.status(200);
		        res.body.should.have.property('details');
		        done();
		     });
		 });

        it('post tasks', function() {
	        var task = {
				id_time_record: 201786102936,
				name: "Test task",
				date: "8/8/2017",
				finish: 0,
				description: "Testing task from mocha"
		    }
		    chai.request(server)
		    .post('/api/task/add')
		    .send(task)
		    .end(function(err, res) {
		        if (err) done(err);
		        res.should.have.status(200);
		        done();
		     });
        });

        it('post time_records', function() {
          	var time_records = {
				name: "Test time record",
				description: "Proving time record form mocha",
				finish: 0,
				hours: 3,
				minutes: 40,
				seconds: 20
		    }
		    chai.request(server)
		    .post('/api/time-record/add')
		    .send(time_records)
		    .end(function(err, res) {
		        if (err) done(err);
		        res.should.have.status(200);
		        done();
		     });
        });
        it('post project_task', function() {
          var project_task = {
				id_project: 201786113127,
				id_task: 201786103155
		    }
		    chai.request(server)
		    .post('/api/project-task/add')
		    .send(project_task)
		    .end(function(err, res) {
		        if (err) done(err);
		        res.should.have.status(200);
		        done();
		    });
        });
	});
});

describe('Put by id', function() {
    describe ('proving put', function() {
        it('Put projects', function(){
        	var project = {
        		id_project: 201786113127,
	            name: "test project",
	            description: "Mocha test project"
	        }
        	chai.request(server)
            .get('/api/project/edit/' + project.id_project)
            .send(project)
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
        });

        it('put tasks', function() {
         	var task = {
         		id_task: 201786103155,
				id_time_record: 201786102936,
				name: "Test task",
				date: "8/8/2017",
				finish: 0,
				description: "Testing task from mocha"
		    }
        	chai.request(server)
            .get('/api/task/edit/' + task.id_task)
            .send(task)
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
        });

        it('put time_records', function() {
          	var time_records = {
          		id_time_record: 201786102936,
				name: "Test time record",
				description: "Proving time record form mocha",
				finish: 0,
				hours: 3,
				minutes: 40,
				seconds: 20
		    }
        	chai.request(server)
            .get('/api/time-record/edit/' + time_records.id_time_record)
            .send(time_records)
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
        });
	});
});

describe('deletes', function() {
    describe ('proving deletes', function() {
        it('get by id project', function(){
            var id_project = 201786113127;
        	chai.request(server)
            .get('/api/project/delete/' + id_project)
            .end((err, res) => {
                res.should.have.status(200);
              	done();
            });
        });

        it('get by id task', function() {
         	var id_task = 201786103155;
        	chai.request(server)
            .get('/api/task/delete/' + id_task)
            .end((err, res) => {
                res.should.have.status(200);
              	done();
            });
        });

        it('get by id time_record', function() {
         	var id_time_record = 201786102936;
        	chai.request(server)
            .get('/api/time-record/delete/' + id_time_record)
            .end((err, res) => {
                res.should.have.status(200);
              	done();
            });
        });
	});
});


