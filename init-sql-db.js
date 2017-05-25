var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,


	user: 'root',

	password: '',
	datebase: 'musicplaylist_db'

});

connection.connect(function(err){

	if(err) throw err;
	console.log("connected as id " + connection.threadId);
});

connection.query('SECLECT * FROM playlist_song', function(err, res){
	if(err) throw err;
	console.log(res);
});

var userData = {title: "hot in here", artist: "Nelly", genre: "rap"};

connection.query("INSERT INTO playlist_song SET ?" , userData, function(err,res){
});

connection.query("INSERT INTO playlist_song SET ? WHERE ?" , [{title: grillz}, {genre: southern rap}], function(err,res){
});

var userArtist = {artist: "Beatles"};
connection.query("DELETE FROM playlist_song WHERE ?", userArtist, function(err,res){

});
