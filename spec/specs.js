describe('Account', function () {
  it("creates an account with specifications", function() {
    var testAccount = new Account("Julianna Green", 25);
    expect(testAccount.name).to.equal("Julianna Green");
    expect(testAccount.amount).to.equal(25);
  });

  it("withdrawls a given amount from the bank account", function() {
    var testAccount = new Account("Julianna Green", 25);
    expect(testAccount.withdrawl(5)).to.equal(20);
  });
});
