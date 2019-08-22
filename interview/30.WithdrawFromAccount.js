const account1 = {
    name: 'Jen',
    totalAmount: 5000,
    deductAmount: function (amount) {
        console.log(this);
        this.totalAmount -= amount;
        return 'Amount in account: ' + this.totalAmount;
    },
    deductAmountES6: (amount) => {
        console.log(this);  // { } => no reference from outside scope
        this.totalAmount -= amount;
        return 'Amount in account: ' + this.totalAmount;
    },
};

const account2 = {
    name: 'James',
    totalAmount: 8000,
};

const withdrawFromAccount = function (amount) {
    return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)());    // 7500
console.log(withdrawFromAccount(200)());    // 7300

const withdrawFromAccountES6 = (amount) => account1.deductAmountES6.bind(account2, amount);

console.log(withdrawFromAccountES6(500)());    // NaN
console.log(withdrawFromAccountES6(200)());    // NaN
