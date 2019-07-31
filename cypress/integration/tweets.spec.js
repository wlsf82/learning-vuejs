describe("Tweets", () => {
  beforeEach(() => cy.visit("https://bit.ly/2Git95m"));

  it("has 'THE VUE VIEW' main heading", () => {
    cy.get("h1").should("contain", "THE VUE VIEW");
  });

  it("has a visible avatar", () => {
    cy.get(".image-container img").should("be.visible");
  });

  it("increases the number of 'tweets' after a new one is submitted", () => {
    cy.get(".tweet").its("length").then(numberOfTweetsBefore => {
      const newTweet = "Yoo-hoo, time for Cypress!";

      cy.get(".new-tweet input").type(newTweet);
      cy.contains("Add Tweet").click();

      cy.get(".tweet").its("length").should("be.gt", numberOfTweetsBefore);
      cy.get(".tweet").last().should("contain", newTweet);
    });
  });

  it("tweets using custom command", () => {
    cy.get(".tweet").its("length").then(numberOfTweetsBefore => {
      const newTweet = "Yay, custom commands with Cypress!";

      cy.tweet(newTweet);

      cy.get(".tweet").its("length").should("be.gt", numberOfTweetsBefore);
      cy.get(".tweet").last().should("contain", newTweet);
    });
  });
});
