var bandNames = require("./bands.js");
var allBands = bandNames.bands;

for(var genre in allBands){
	console.log("This " + genre + " band is " + allBands[genre]);
}