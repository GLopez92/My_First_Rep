function  digitalPal(hungry,sleepy, bored, age) {
	this.hungry = hungry;
	this.sleepy = sleepy;
	this.bored = bored;
	this.age = age;

	this.feed = function(){
		
		if(this.hungry === true){
			console.log("That was yummy!")
			this.hungry = false;
			this.sleepy = true;
		}else{
			console.log("No thanks! I'm full.")
		}

	}

	this.sleep = function(){

		if(this.sleepy === true){
			console.log("ZZZZZZZZZ");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		}else{
			console.log("No thanks! I'm full.");
		}

		this.increaseAge = function(){
		this.age++;
		console.log("Happy Birthday to me! I am "+ this.age +" old!");
		}

	}


	this.play = function(){

		if(this.bored === true){
			console.log("Yay! Let's play!");
			this.bored = false;
		}else{
			console.log("Not right now. Later?");
		}

	}


}

var dog = new digitalPal();

dog.outside = false;


dog.woof = function (){
	console.log("Woof! Woof!");

};

dog.goOutside = function(){
	
	if(this.outside === false){
			console.log("Yay! I love the outdoors!");
			this.outside = true;
		}else{
			console.log("We're already outside though...");
		}


};

dog.goInside = function (){
	
	if(this.outside === true){
			console.log("Do we have to? Fine...");
		}else{
			console.log("I'm already inside...");
		}

};



var cat = new digitalPal();

    cat.houseCondition = 100;

	cat.meow = function(){
		console.log("Meow! Meow!");
	};

	cat.destroyFurniture = function(){
		

		if (this.houseCondition <= 0){
			return;
		}else{
			this.sleepy = true;
			this.bored = false;
			this.houseCondition -= 10;
			console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
		}

	};

	cat.buyNewFurniture = function(){
		this.houseCondition += 50;
		console.log("Are you sure about that?");
	};



dog.woof(); 
dog.goOutside(); 
dog.goInside(); 

cat.meow(); 
cat.destroyFurniture(); 
cat.buyNewFurniture(); 











