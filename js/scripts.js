function Account(name, amount) {
  this.name = name;
  this.amount = amount;
};

Account.prototype.withdrawl = function(withdrawl) {
  var total = this.amount;
  return total -= withdrawl;
}
