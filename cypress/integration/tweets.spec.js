describe("Tweets", () => {
  beforeEach(() => cy.visit("https://bit.ly/2Git95m"));

  it("has 'THE VUE VIEW' main heading", () => {
    cy.get("h1").should("contain", "THE VUE VIEW");
  });

  it("has a visible avatar", () => {
    cy.get(".image-container img").should("be.visible");
  });
});