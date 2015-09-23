var movies = [];
var tickets = [];

function Movie(name, showTimes){
  this.name = name;
  this.showTimes = showTimes;
  movies.push(this);
}

Movie.prototype.nameAsId = function() {
  return this.name.split(" ").join("-");
};

function Ticket(ticketType, price) {
  this.ticketType = ticketType;
  this.price = price;
  tickets.push(this);
}

var adult = new Ticket("Adult", "$10.00");
var matinee = new Ticket("Matinee", "$8.50");
var student = new Ticket("Student", "$7.00");
var senior = new Ticket("Senior", "$9.00");

var movie1 = new Movie("Neverending Story", ["10:30 AM", " 1:15 PM", " 3:00 PM", " 7:30 PM"]);
var movie2 = new Movie("Rocky Horror Picture Show", ["11:30 AM", " 3:15 PM", " 8:00 PM", " 12 AM"]);
var movie3 = new Movie("The Mummy", ["9:30 AM", " 2:45 PM", " 5:00 PM", " 6:00 PM"]);

$(document).ready(function() {
  movies.forEach(function(movie){
    $("#show-movie").prepend('<h4 id="' + movie.nameAsId() + '" class="movie">' + movie.name +'</h4>')
    $("#" + movie.nameAsId()).last().click(function(){
      $("ul").empty();
      $("#selected-movie").show();
      $("#selected-movie").text(movie.name);
      $("#selected-movie").text(movie.showTimes);
      });
    });
  });
