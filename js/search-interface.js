var Search = require("./../js/search.js").searchModule;

var userNameDisplay = function(userName, name) {
  $("#results").append("<h2>" + name + "</h2>");
};

var userFail = function(message) {
  $("#results").append("<h2>Unfortunately, " + message);
}

var displayRepositories = function(userName, description, url) {
  $("#repositories").append("<ul>" + "<li>" + userName + "</li>" + "<li>" + description + "</li>" + "<li>" + url + "</li>" + "</ul>");
};

$(document).ready(function() {
  $("#search-form").submit(function(event) {
    event.preventDefault();
    var userName = $("#search").val();
    var newUser = new User(userName);
    newUser.getUser(userNameDisplay, userFail);
    newUser.getRepositories(displayRepositories);
  });
});
