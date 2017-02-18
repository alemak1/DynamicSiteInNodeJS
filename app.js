//Problem: We need a simple way to look at a user's badge count and Javascript points from a web browser.

//Solution::  Use Node.js to perform the profile look ups and server our template via HTTP.

var router = require('./router.js');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  	router.home(request,response);
  	router.user(request,response);
});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port);
});




//4. Function that handles the reading of files and merge in values
	//read from file and get a string
		//merge values in to string
