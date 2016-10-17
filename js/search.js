var apiKey = require('./../.env').apiKey;

function Search(username) {
  this.username = username;
}

Search.prototype.getUser = function(userNameDisplay, userFail) {
  var = this.username;
  $.get("https://api.github.com/users/" + username + "?access_token=" + apiKey).then(function(response) {
    userNameDisplay(username, response.name);
  }).fail(function(error) {
    userFail(username, error.responseJSON.message);
  });
};

Search.prototype.getRepositories = function(displayRepositories) {
  var username = this.username;
  $.get("https://api.github.com/users/" + username + "/repos?access_token=" + apiKey).then(function(response) {
    for(var i=0; i<response.length; i++) {
      if (response[i].description !== null) {
        displayRepositories(response[i].userName, response[i].description, response[i].url);
      } else {
        displayRepositories(response[i].userName, "None", response[i].url);
      }
    }
  }).fail(function(error)) {
    alert(response);
  });
};
exports.searchModule = Search;
