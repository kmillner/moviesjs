function Movie(name, showTimes){
  //this.movies = [];
  this.name = name;
  this.showTimes = showTimes;
  // this.movies.push(this);
}

var neverendingStory = new Movie("Neverending Story", ["10:30 AM", "1:15 PM", "3:00 PM", "7:30 PM"]);
var rockyHorror = new Movie("Rocky Horror Picture Show", ["11:30 AM", "3:15 PM", "8:00 PM", "12 AM"]);
var theMummy = new Movie("The Mummy", ["9:30 AM", "2:45 PM", "5:00 PM", "6:00 PM"]);

function Ticket(ticketType, price) {
  this.ticketType = ticketType;
  this.price = price;
}

var adult = new Ticket("Adult", "$10.00");
var matinee = new Ticket("Matinee", "$8.50");
var student = new Ticket("Student", "$7.00");
var senior = new Ticket("Senior", "$9.00");

var showMovies = function() {
  return neverendingStory;
  return rockyHorror;
  return theMummy;
  showMovies();
}



// $(document).ready(function() {
//   $("#add-address").click(function() {
//
//   });
//
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
//     $(".new-address").each(function() {
//       var inputtedLocale = $(this).find("input.new-locale").val();
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedState = $(this).find("input.new-state").val();
//
//       var newAddress = new Address(inputtedLocale, inputtedStreet, inputtedCity, inputtedState)
//       newContact.addresses.push(newAddress);
//     });
//
//
//
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address) {
//         //if  $("li").not( ": , ,").show();
//         $("ul#addresses").append("<li>" + address.locale + ": " + address.street + ", " + address.city + ", " + address.state + "</li>");
//
//       });
//     });
//   });
// });
