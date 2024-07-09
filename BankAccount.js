export default class BankAccount {
    constructor(pin) {
        this.pin = pin;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }
}