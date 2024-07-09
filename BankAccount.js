export default class BankAccount {
    constructor(pin, notifyBank) {
        this.pin = pin;
        this.balance = 0;
        this.notifyBank = notifyBank; 
    }

    deposit(amount) {
        this.balance += amount;
    }
    
    withdraw(amount, pin) {
        if (this.balance < amount) {
            this.notifyBank("Insufficient Balance requested");
            throw new Error("Insufficient Balance");
        }

        if (pin !== this.pin) {
            throw new Error("Invalid pin");
        }

        this.balance -= amount;
    }
}