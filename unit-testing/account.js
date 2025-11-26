export class AccountDetails {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  checkBalance() {
    return this.balance;
  }

  withdraMoney(amount) {
    this.balance = this.balance - amount;
    return this.balance;
  }

  depositMoney(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
}
