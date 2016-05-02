//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
// business logic
function createAccount(first, last, init) {

}

// user interface logic
$("#newAccount").click(function(event) {
  event.preventDefault();
  alert($("#firstname").val());
  alert($("#lastname").val());
  alert($("#initialdeposit").val());
  createAccount($("#firstname").val(), $("#lastname").val(), $("#initialdeposit").val());
});


$("#open").click(function() {
  $("#openAccount").show();
  $("#transactions").hide();
  $("#showBalance").hide();
});
$("#change").click(function() {
  $("#openAccount").hide();
  $("#transactions").show();
  $("#showBalance").hide();
});
$("#view").click(function () {
  $("#openAccount").hide();
  $("#transactions").hide();
  $("#showBalance").show();
});
