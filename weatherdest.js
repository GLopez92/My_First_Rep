// // This application uses two different NPM packages to provide the complete address and weather information about any landmark (or location).
// // Ex: "node weatherdest Eiffel Tower" or "node weatherdest White House"

// // Mainly it combines the code from the last two activities with a bit more daata handling. (Study it on your own time if interested).

// // =========================================================================================================================================

// // Include both the geocoder and weather NPM packages

// // // Take in the command line arguments
// // var nodeArgs = process.argv;

// // // Create an empty string for holding the address
// // var address = "";

// // // Capture all the words in the address (again ignoring the first two Node arguments)
// // for (var i = 2; i < nodeArgs.length; i++) {

// //   // Build a string with the address.
// //   address = address + " " + nodeArgs[i];

// // }


// var inquirer = require('inquirer');

// // Create a "Prompt" with a series of questions.
// inquirer.prompt([

//   // Here we create a basic text prompt.
//   {
//     type: "input",
//     message: "Search a landmark?",
//     name: "landmark"
//   },

 
// ]).then(function(user) {

// var geocoder = require("geocoder");
// var weather = require("weather-js");

// console.log(user);

// var address = user.landmark;
//   // Then use the Google Geocoder to geocode the address
// geocoder.geocode(address, function(err, data) {


//   // console.log(data.results[0].formatted_address);
//   console.log(JSON.stringify(data, null, 2));

  

//  });



// });

// // Example Input:
// // node weatherdest.js Times Square

// // RESULTING OUTPUT:
// // Weather Forecast:
// // Theater District, New York, NY, USA
// // -------------------------------------------------------------------
// // Current Temperature: 50 F
// // Sky: Mostly Clear
// // Tomorrow's Forecast: Low of 52F, High of 59F

/**
 * Input prompt example
 */

'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What\'s your first name'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function (value) {
      var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});