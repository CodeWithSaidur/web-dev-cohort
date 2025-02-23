// BankAccount constructor function
function BankAccount(accountNumber, holderName, balance) {
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}
// Deposit method
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  return this.balance;
};
// Withdraw method
BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    throw new Error("Insufficient balance");
  }
  this.balance -= amount;
  return this.balance;
};
// Transfer method
BankAccount.prototype.transfer = function (amount, targetAccount) {
  this.withdraw(amount);
  targetAccount.deposit(amount);
};

// Example usage
const account1 = new BankAccount(101, "Alice", 1000);
const account2 = new BankAccount(102, "Bob", 500);
console.log(account1.transfer(300, account2)); // Transfer 300 from Alice to Bob
console.log(account1.balance); // 700
console.log(account2.balance); // 800
