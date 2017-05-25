function userPick(name,profession,gender,age,strength,hitPoints){
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitPoints = hitPoints;
	this.printStats = function(){
		console.log("Name: " + this.name);
		console.log("Profession: " + this.profession);
		console.log("Gender: " + this.gender);
		console.log("Age: " + this.age);
		console.log("Strength: " + this.strength);
		console.log("hitPoints: " + this.hitPoints);
		console.log("---------------")
	}

	this.isAlive = function(){
		if (this.hitPoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }
    console.log(this.name + " has died!");
    return false;

	}

	this.attack = function(userPick2){
		userPick2.hitPoints -= this.strength;
		console.log('this.strength: ', this.strength);
		console.log('this.hitPoints: ', this.hitPoints);
		console.log('this.name: ', this.name);
		console.log('userPick2.strength: ', userPick2.strength);
		console.log('userPick2.hitPoints: ', userPick2.hitPoints);
		console.log('userPick2.name: ', userPick2.name);
	

	}

	this.levelUp = function() {
		this.age += 1;
		this.strength += 25;
		this.hitPoints -= userPick2;
		// this.hitPoints -= userPick3;
	}
};

var gunner = new userPick("gunner", "shooter", "male", 100, 550,2000);
var fisher = new userPick("fisher", "shark hunter", "male", 21, 200,3000);
var hunter = new userPick("hunter", "care giver", "female", 101, 673,2500);

gunner.printStats();
fisher.printStats();
hunter.printStats();

while(gunner.isAlive() === true || fisher.isAlive() === true || hunter.isAlive() === true){
  gunner.attack(fisher);
  gunner.attack(hunter);
  fisher.attack(gunner);
  fisher.attack(hunter)
  hunter.attack(fisher);
  hunter.attack(gunner);

  // // prints stats to show changes
  gunner.printStats();
  fisher.printStats();
  hunter.printStats();
};


