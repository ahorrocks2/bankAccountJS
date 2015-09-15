function Account(name, amount) {
  this.name = name;
  this.amount = amount;
};

Account.prototype.withdrawl = function(withdrawl) {
  var total = this.amount;
  return total -= withdrawl;
};

Account.prototype.deposit = function(deposit) {
  var total = this.amount;
  return total += deposit;
};

$(document).ready(function() {
  $("form#accountInfo").submit(function(event) {
    var newName = $("input#name").val()
    var newDeposit = $("input#initialDeposit").val()
    var result = new Account(newName, newDeposit);
      var resultName = result.name;
      var resultDeposit = result.amount;

    $(".output").text(resultName + ", " + resultDeposit);
    $("#result").show();
    event.preventDefault();
  });
});
