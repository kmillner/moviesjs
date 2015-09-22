describe('Movie', function() {
  it("creates a movie with a name and times it is showing", function() {
    var testMovie = new Movie("Neverending Story", "10:15 AM");
    expect(testMovie.name).to.equal("Neverending Story");
    expect(testMovie.showTime).to.eql([]);

  });
});

describe('Ticket', function() {
  it("creates a ticket with a price and the type of ticket it is", function() {
    var testTicket = new Ticket("$9.50", "Student");
    expect(testTicket.price).to.eql([]);
    expect(testTicket.ticketType).to.eql([]);

  });
});
