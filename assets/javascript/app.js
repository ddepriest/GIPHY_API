//Initial array of players
var players = ["Don Mattingly", "Nolan Ryan", "Pedro Martinez", "Darryl Strawberry", "Don Baylor", "Dave Winfield", "Mickey Mantle", "Bob Feller", "Rogers Hornsby", "Roberto Clemente", "Thurman Munson", "Dwight Gooden", "Goose Gossage"]

//function to display searched player//
function displayPlayer() {

  //clear previous searched player in div//
  $("#searchedPlayer").empty();

  var player = $(this).attr("data-name");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=dSOMPKxjDHvhpboxYlrf1B4qv7yu28WW&limit=10";

  $.ajax({url: queryURL, method: "GET"})
    .done(function(response) {
      var results = response.data;

      for(var i=0; i < results.length; i++){
        
      }
      )
    }

}

