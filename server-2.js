var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest( request, reponse){
	reponse.end("It works!! Path Hit: " + request.url);
};


function handleRequest2(request, reponse){
	reponse.end("Swing and uh...!! Path Hit: " + request.url);
};

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest2);


serverOne.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
});


serverTwo.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
});

