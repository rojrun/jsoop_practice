
class Calculator{
	constructor(){
		this.operator = null;
		this.number1 = null;
		this.number2 = null;
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator(op){
		if (op === "+"){
			this.operator = "+";
			return true;
		} else if (op === "-"){
			this.operator = "-";
			return true;
		} else if (op === "*"){
			this.operator = "*";
			return true;
		} else if (op === "/"){
			this.operator = "/";
			return true;
		} else {
			return false;
		}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(number){
		if (typeof number === "number"){
			if (this.number1 === null) {
                this.number1 = number;
                return 1;
            } else if (this.number2 === null) {
				this.number2 = number;
                return 2;
			} else{
			    return false;
            }
		} else {
			return false;
		}
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		switch (this.operator){
			case "+":
				var result = this.number1 + this.number2;
				break;
			case "-":
				var result = this.number1 - this.number2;
				break;
			case "*":
				var result = this.number1 * this.number2;
				break;
			case "/":
				var result = this.number1 / this.number2;
				break;
		}
		this.number1 = null;
		this.number2 = null;
		this.operator = null;
		return result;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}