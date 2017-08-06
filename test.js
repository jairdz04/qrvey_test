const expect  = require('chai').expect;
const request = require('request');


describe('Gets', function() {
    describe ('Proving getters ', function() {
        it('get projects', function(){
            request('http://localhost:3000/api/project', function(error,response) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('get tasks', function() {
          request('http://localhost:3000/api/task' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });

        it('get time_records', function() {
          request('http://localhost:3000/api/time-record' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });
        it('get project_task', function() {
          request('http://localhost:3000/api/project-task' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });
	});
});

describe('Gets by id', function() {
    describe ('proving gets by id', function() {
        it('get by id projects', function(){
            request('http://localhost:3000/api/project/:id', function(error,response) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('get by id tasks', function() {
          request('http://localhost:3000/api/task/:id' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });

        it('get by id time_records', function() {
          request('http://localhost:3000/api/time-record/:id' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });
       
	});
});

describe('Posts', function() {
    describe ('proving posts', function() {
        it('post projects', function(){
            request('http://localhost:3000/api/project/add', function(error,response) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('post tasks', function() {
          request('http://localhost:3000/api/task/add' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });

        it('post time_records', function() {
          request('http://localhost:3000/api/time-record/add' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });
        it('post project_task', function() {
          request('http://localhost:3000/api/project-task/add' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });
	});
});

describe('puts', function() {
    describe ('Proving puts', function() {
        it('put project', function(){
            request('http://localhost:3000/api/project/edit/:id', function(error,response) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('put task', function() {
          request('http://localhost:3000/api/task/edit/:id' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });

        it('put time_record', function() {
          request('http://localhost:3000/api/time-record/edit/:id' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });
       
	});
});

describe('deletes', function() {
    describe ('proving deletes', function() {
        it('delete project', function(){
            request('http://localhost:3000/api/project/delete/:id', function(error,response) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('delete task', function() {
          request('http://localhost:3000/api/task/delete/:id' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });

        it('delete time_record', function() {
          request('http://localhost:3000/api/time-record/delete/:id' , function(error,response) {
             	expect(response.statusCode).to.equal(200);
            });
        });
       
	});
});