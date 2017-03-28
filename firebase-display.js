
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAjLOCnFetZBaMBqLoAxQOJiuve81ijJlU",
    authDomain: "secondchancepantry-f65c5.firebaseapp.com",
    databaseURL: "https://secondchancepantry-f65c5.firebaseio.com",
    storageBucket: "secondchancepantry-f65c5.appspot.com",
    messagingSenderId: "1083855170391"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().on("value", function(snapshot) {
  	
  
  var data = snapshot.val();
  var ingredients = data.users.ingredients;


  ingredientsInDatabase(ingredients);
  expire(ingredients);
  

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function expire(snapshot) {

    $( "#date-picker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
   
};


function ingredientsInDatabase(snapshot) {

     var expire = $( "#date-picker" ).datepicker({
      changeMonth: true,
      changeYear: true
      });
  
     
      var insideList = snapshot;
      
     
      if (!Array.isArray(insideList)) {
        insideList = [];
      }
   
      for (var i = 0; i < insideList.length; i++) {
        var ingsButton = $("<button class='ingredient-button delete'>").text(insideList[i]).attr("data-index", i);
        var expireButton = $( "<p>Date: <input type='text' id='date-picker'></p>");
        $("#ingredients-list").prepend(ingsButton);
        $("#expire-button").prepend(expireButton);
      }
};

$(document).on("click", "button.delete", function(event) {

      event.preventDefault();

      $(this).remove();
});
    


