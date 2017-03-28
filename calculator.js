var operations = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);



if( operations === "add") {
	console.log(num1 + num2);
}

else if( operations === "divide"){
	console.log(num1 / num2);
}

else if(operations === "multiply"){
	console.log(num1 * num2);

}else if(operations === "subtract"){
	console.log(num1 - num2);
}

else{
	console.log("enter inputs")
}
