var fs = require('fs');


fs.readFile('best_things_ever.txt','utf8', function(err, data){
	if (err)err;
	console.log(data);
	var textData = data.split(', ');

	for(var i = 0; i < textData.length; i++){
		console.log(textData[i]);
	};

});