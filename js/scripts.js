//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
// business logic
function Account(first, last, init) {
  this.firstName=first;
  this.lastName=last;
  this.balance=parseFloat(init);
}

Account.prototype.transaction=function(amount,type) {
  if(type===1) {
    this.balance+=amount;
  }
  if(type===2) {
    this.balance-=amount;
  }
}

// user interface logic
var accountExists=false;

$("#newAccount").click(function(event) {
  event.preventDefault();
  newAccount= new Account($("#firstname").val(), $("#lastname").val(), $("#initialdeposit").val());
  accountExists=true;
  $("#openAccount").hide();
  $("#transactionRecord").append("<li>$"+ newAccount.balance.toFixed(2) + " - Initial Deposit </li>");
  $("#currentBalance").text("$" + newAccount.balance.toFixed(2));
  $("#showBalance").show();
});

$("#submitTransaction").click(function(event) {
  event.preventDefault();
  var transactionAmount=parseFloat($("#transactionAmount").val());
  var transactionType=0;
  if(parseInt($("input:checked").val())===1) {
    var transactionType=1;
    $("#transactionRecord").append("<li>$"+ transactionAmount.toFixed(2) + " - " + $("#transactionNote").val() + "</li>");
    newAccount.transaction(transactionAmount, transactionType);
    $("#transactions").hide();
    $("#currentBalance").text("$" + newAccount.balance.toFixed(2));
    $("#showBalance").show();
  } else if (parseInt($("input:checked").val())===2) {
    var transactionType=2;
    $("#transactionRecord").append("<li>($"+ transactionAmount.toFixed(2) + ") - " + $("#transactionNote").val() + "</li>");
    newAccount.transaction(transactionAmount, transactionType);
    $("#transactions").hide();
    $("#currentBalance").text("$" + newAccount.balance.toFixed(2));
    $("#showBalance").show();
  } else {
    alert("invalid transaction type, please select deposit or withdrawal");
  }

});

$("#open").click(function() {
  if(accountExists) {
    alert("You already have an account with the bank, please use the transaction tab for deposits!")
  } else {
    $("#openAccount").show();
    $("#transactions").hide();
    $("#showBalance").hide();
  }

});
$("#change").click(function() {
  if(accountExists) {
    $("#openAccount").hide();
    $("#transactions").show();
    $("#showBalance").hide();
  } else {
    alert("You cannot make a transaction because you do not have an account with this bank. Please open an account!");
  }

});
$("#view").click(function () {
  if(accountExists) {
    $("#openAccount").hide();
    $("#transactions").hide();
    $("#showBalance").show();
  } else {
    alert("We cannot show you your balance because you do not have an account with this bank. Please open an account!")
  }

});
