<h1>Api documentation </h1>

<h3>Description</h3>
<p>The idea is to develop an app that allows to take tracking of times (similar to Toggl.com)
</br> base url : http://127.0.0.1:3000/api
</br> 
</p>
<h3>Projects</h3>
<p>
<ul>
<li>/project , returns an array of objects with properties as a: id_project [any], name[String], description[String]  </li>
<li>/project/:id , returns an especific project</li>
<li>/project/add, Save a new project</li>
<li>/project/edit/:id, Allow edit an existing project</li>
<li>/project/delete/:id, Allow delete an existing project</li>
</ul>
</p>
<h3>Tasks</h3>
<p>
<ul>
<li>/task , returns an array of objects with properties as a: id_task [any], id_time_record[any], name[String], date[string], finish[number between 0 and 1],description[String]  </li>
<li>/task-by-order, returs an array of objects sorted from the most recent to the oldest</li>
<li>/task-by-day ,returs an array of objects ordered by days</li>
<li>/task/:id , returns an especific task</li>
<li>/task/add, Save a new task</li>
<li>/task/edit/:id, Allow edit an existing task</li>
<li>/task/delete/:id, Allow delete an existing task</li>
</ul>
</p>

<h3>Time records</h3>
<p>
<ul>
<li>/time-record , returns an array of objects with properties as a: id_time_record [any], name[String], hours[number],minutes[number], seconds[number], finish[number between 0 an 1],description[String]  </li>
<li>/time-record/:id , returns an especific time record</li>
<li>/time-record/add, Save a new time record</li>
<li>/time-recordt/edit/:id, Allow edit an existing time record</li>
<li>/time-record/delete/:id, Allow delete an existing time record</li>
</ul>
</p>

<h3>Relation between projects and tasks</h3>
<p>
<ul>
<li>/project-task , returns an array of objects with specific properties as a: id_project[any], id_task[any]</li>
<li>/project-task/add, Save a new relation between projects and tasks</li>
</ul>
</p>

<h3>Auth - through Twitter</h3>
<p>
<ul>
<li>/request-token , send a request and redirect to twitter, returns a secret and redirect to /access-token</li>
<li>/access-token , returns user´s credentials</li>
</ul>
</p>
<h3>Unit test</h3>
<li>File: test.js</li>
<li>Excecute: npm test</li>



