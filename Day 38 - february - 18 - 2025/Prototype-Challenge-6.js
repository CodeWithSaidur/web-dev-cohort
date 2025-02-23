// BankAccount constructor function
function BankAccount(balance) {
  this.balance = balance;
  this.transactions = [];
}

// Deposit method
BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
};

// Withdraw method
BankAccount.prototype.withdraw = function(amount) {
  if (amount > this.balance) {
      this.transactions.push("Insufficient balance");
  } else {
      this.balance -= amount;
      this.transactions.push(`Withdrew ${amount}`);
  }
};

// Get transaction history method
BankAccount.prototype.getTransactionHistory = function() {
  return this.transactions;
};

// Example usage
const account = new BankAccount(100);
account.deposit(50);      // Deposits 50
account.withdraw(30);     // Withdraws 30
account.withdraw(150);    // Insufficient balance

console.log(account.balance); // 120
console.log(account.getTransactionHistory());
// [ 'Deposited 50', 'Withdrew 30', 'Insufficient balance' ]
