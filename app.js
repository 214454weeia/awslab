var lab1_1 = require("./lab/lab1_1").lab;
var example_1 = require("./example_1").lab;
var ec2_comm = require(".lab/ec2_comm").lab;

var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1},
	{path: "/lab/ec2_comm", action: ec2_comm}
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

