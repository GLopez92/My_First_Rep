var http = require("http");

var PORT = 8080;

function handleRequest( request, reponse){
	reponse.end("Look it works!! Path Hit: " + reponse.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
})