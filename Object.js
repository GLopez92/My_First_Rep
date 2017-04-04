var dog = { 
		raining: true,
		noise: "woof",
		makeNoise: function() {
      if(this.raining === true){
    	console.log(this.noise)
    }
  }

};
var cat = {

		raining: false,
		noise: "meow",
		makeNoise: function() {
    if(this.raining === true){
    	console.log(this.noise)
    }
  }

};

dog.makeNoise();
// cat.raining = true; controls display on node.js
cat.makeNoise();


