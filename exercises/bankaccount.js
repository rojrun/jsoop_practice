

class Account{
	constructor(){
		this.totalAmount = 0;
		//store the amount of money in the account
	}
	add(amount){
		this.totalAmount += amount;
		return this.totalAmount;
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
	    console.log("total", this.totalAmount);
	    this.totalAmount -= amount;
		if (amount > this.totalAmount){
			return this.totalAmount;
		} else {
			return amount;
		}

		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.totalAmount;
		//returns the amount in the account
	}
}