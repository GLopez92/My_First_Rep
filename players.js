
var inquirer = require('inquirer');

function userPick(name,position,defense,offense){
	this.name = name;
	this.position = position;
	this.defense = defense;
	this.offense = offense;

	this.printStats = function(){
		console.log("Name: " + this.name);
		console.log("position: " + this.position);
		console.log("Defense: " + this.defense);
		console.log("offense: " + this.offense);
		console.log("---------------")
	}

	this.goodGame = function(){
		if (coinflip === true) {
     	offense++;
    }
    return false;


	}

	this.badGame = function(){

	if (coinflip === true) {
     	offense--;
    }
    return false;

	}

};

var uniqueArray = [];
var startersArray = [];
var subsArray = [];


var createPlayers = function() {

 if (uniqueArray.length <=  7 && startersArray.length <=  7 && subsArray.length <= 2) {
    console.log("New Players");
  
    inquirer.prompt([
      {
      	type: 'input',
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your position?",
        type: 'list',
        choices: ["kicker", new inquirer.Separator(), "blocker", new inquirer.Separator(), "shooter"]
      }, {
        name: "Defense",
        message: "Pick a Number?"
        type: 'list',
      },{
      	type: 'input',
        name: "Offense",
        message: "Pick a number?"
      },  
    ]).then(function(answers) {


		var players = new userPick(
			answers.name,
            answers.position,
            answers.defense,
            answers.offense

		);

        if (uniqueArray.length < 8) {
        	uniqueArray.push(players);
        } else if (startersArray < 5) {
        	startersArray.push(players);
        } else {
        	subsArray.push(players);
        }

		createPlayers();
	});
} else {
    for (var x = 0; x < uniqueArray.length; x++) {
      uniqueArray[x].printStats();
    }
  }

};


// var playGame = function() {

 
// };


createPlayers();


for(var i = 0; i < uniqueArray.length; i++){
	uniqueArray[i].printStats();
}

for(var i = 0; i < startersArray.length; i++){
	startersArray[i].printStats();
}

for(var i = 0; i < subsArray.length; i++){
	subsArray[i].printStats();
}



// playGame();
// goodGame();
// badGame();


