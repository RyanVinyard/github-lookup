var User = require("./../js/search.js").searchModule;

var userNameDisplay = function(username, name) {
  $("#results").append("<h2>" + name + "</h2>");
};

// var userFail = function(message) {
//   $("#results").append("<h2>Unfortunately, ")
// }

$(document).ready(function() {
  $("#search-form").submit(function(event) {
    event.preventDefault();
    var username = $("#search").val();
    var newUser = new User(username);
    newUser.getUser(userNameDisplay, userFail);
  });
});
