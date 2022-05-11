# NodejsWEBSERVICE
B2B Code Json format



For communication with Nodejs webservice we will need a library which is axios, 
it helps to send asynchronous request to web service and call apis via React

ReactJs and NodeJs communication
How to run nodejs webservice
1.	in our nodejs webservice change the port to 4000 in app.js
2.	comment _id:….  lines in router.js
3.	change the name of the schema in model to emptabs
4.	add following settings in app.js file


5.	app.use(function(req, res, next) {
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	    res.setHeader('Access-Control-Allow-Credentials', true);
	    next();
	});
  
  And then run the application example on specified path// change as per on your machine
    d:\web ,……..\expresscrudwebservice>node  app.js
    
    and test all url 
for get, post, put and delete using postman

To create React application
1.	create a new react app
create-react-app employeecrudaxios
2.	install following dependencies
npm install react-router-dom@5.2.0 --save
npm install react-bootstrap@next bootstrap@4.6 –save
npm install react-bootstrap-icons –save
3.	do the following for bootstrap setup
add following in index.html file after line 17
<script src="https://unpkg.com/react/umd/react.production.min.js"
crossorigin></script>
<script
 src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
 crossorigin></script>
<script
 src="https://unpkg.com/react-bootstrap@next/dist/reactbootstrap.min.js"
 crossorigin></script>
<script>var Alert = ReactBootstrap.Alert;</script>
add following line in App.tsx		
import 'bootstrap/dist/css/bootstrap.min.css';


