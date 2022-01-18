const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	let isSquareRoot = false
	let answer

	if (mathSymbol === "+") {
		answer = num1 + num2
	} else if (mathSymbol === "-") {
		answer = num1 - num2
	} else if (mathSymbol === "*") {
		answer = num1 * num2
	} else if (mathSymbol === "/") {
		answer = num1 / num2
	} else if (mathSymbol === "%") {
		answer = num1 % num2
	} else if(mathSymbol === "^") {
		answer = Math.pow(num1, num2)
	} else if(mathSymbol === "sqrt") {
		isSquareRoot = true
		answer = Math.sqrt(num1)
	}else {
		console.log(`Unexpected mathSymbol: ${mathSymbol}`)
	}
	
	if (isSquareRoot === false) {
		console.log(`${num1} ${mathSymbol} ${num2} = ${answer}`)
	} else {
		console.log(`The square root of ${num1} = ${answer}`)
	}
	

	// This line closes the connection to the command line interface.
	reader.close()

});




