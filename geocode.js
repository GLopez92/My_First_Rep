var geocoder = require('geocoder');
 


 // var city = process.argv[2];
 // var state = process.argv[3];
 // var address = city + ' ' + state;

 var nodeArgs = process.argv;
 var address = " ";

 for(var i = 2; i < nodeArgs.length; i++){

 	address = address + " " + nodeArgs[i];
 }

 console.log("Searching for:" + address);

// Geocoding 
geocoder.geocode(address, function ( err, data ) {
  // do something with data
  console.log(JSON.stringify(data, null, 2)); 
  console.log(address);
});
 

