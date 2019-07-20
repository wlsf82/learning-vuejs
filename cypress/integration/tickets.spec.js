describe("Tickets", () => {
  beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

  it("has 'TICKETBOX' header's heading", () => {
    cy.get("header h1").should("contain", "TICKETBOX")
  });

  it("fills all the text input fields", () => {
    cy.get("#first-name").type("Walmyr");
    cy.get("#last-name").type("Filho");
    cy.get("#email").type("email@example.com");
    cy.get("#requests").type("vegetarian");
  });

  it("selects two tickets", () => {
    cy.get("#ticket-quantity").select("4");
  });

  it("selects 'vip' ticket type", () => {
    cy.get("#vip").check();
  });
});