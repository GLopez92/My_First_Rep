// Initialize Firebase (YOUR OWN APP)  v
var config = {
    apiKey: "AIzaSyAE51eK-lBcmIYhmgWWpPFNZLdDdOIVwus",
    authDomain: "clicker-fe0be.firebaseapp.com",
    databaseURL: "https://clicker-fe0be.firebaseio.com",
    storageBucket: "clicker-fe0be.appspot.com",
    messagingSenderId: "821969658152"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

database.ref().set({

	clickCount: 100,

});


// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
 database.ref().on("value", function(snapshot) {

      console.log(snapshot.val());

      $("#click-value").html(snapshot.val().clickCount);

      clickCounter = snapshot.val().clickCount;

    }, function(errorObject) {
     console.log("The read failed: " + errorObject.code);
    });


// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  alert("Counter went down by one!");



  // Save new value to Firebase
	database.ref().set({
		clickCount: clickCounter,

	});

  // Log the value of clickCounter
  console.log(clickCounter);


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;



  // Save new value to Firebase
  	database.ref().set({
		clickCount: clickCounter,

	});


  // Log the value of clickCounter
  console.log(clickCounter);


  // Change the HTML Values

    $("#click-value").html(clickCounter);

});
