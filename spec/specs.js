describe('Movie', function() {
  it("creates a movie with a name and times it is showing", function() {
    var neverendingStory = new Movie("Neverending Story", ["10:30 AM"]);
    expect(neverendingStory.name).to.equal("Neverending Story");
    expect(neverendingStory.showTimes).to.eql(["10:30 AM"]);
  });

  it("assigns movie a name and showtimes", function() {
    var rockyHorror = new Movie("Rocky Horror Picture Show", ["11:30 AM"]);
    expect(rockyHorror.name).to.equal("Rocky Horror Picture Show");
    expect(rockyHorror.showTimes).to.eql(["11:30 AM"]);
  });
});

describe('Ticket', function() {
  it("creates a ticket with a price and the type of ticket it is", function() {
    var testTicket = new Ticket("Student", "$7.00");
    expect(testTicket.ticketType).to.eql("Student");
    expect(testTicket.price).to.eql("$7.00");
  });
});
