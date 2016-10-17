var apiKey = require('./../.env').apiKey;

function Search(username) {
  this.username = username;
}

Search.prototype.getUser = function(userNameDisplay, userFail) {
  $.get("https://api.github.com/users/" + username + "?access_token=" + apiKey).then(function(response) {
    userNameDisplay(username, response.name);
  }).fail(function(error) {
    userFail(username, error.responseJSON.message);
  });
};
