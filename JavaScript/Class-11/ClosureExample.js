function sum(a, b, c) {
  return a + b + c;
}

sum(1, 2, 3);

// function currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

sum(1)(2)(3);

// private variable

// bank account

// balance
function BankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${balance}`);
    },
    withdraw: function withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
      } else {
        balance -= amount;
        console.log(`Withdrew: ${amount}, New Balance: ${balance}`);
      }
    },
    getBalance() {
      return balance;
    },
    // getBalance: function getBalance() {
    //   return balance;
    // }
  };
}

const myAccount = BankAccount(100);
myAccount.deposit(50); // Deposited: 50, New Balance: 150
myAccount.withdraw(30); // Withdrew: 30, New Balance: 120
console.log(myAccount.getBalance()); // 120
