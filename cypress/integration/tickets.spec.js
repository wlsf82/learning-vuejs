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

  it("selects 'social media' checkbox", () => {
    cy.get("#social-media").check();
  });

  it("selects 'friend', and 'publication' checkboxes, then uncheck 'friend'", () => {
    cy.get("#friend").check();
    cy.get("#publication").check();
    cy.get("#friend").uncheck();
  });

  it("alerts on email without @", () => {
    cy.get("#email").type("email-example.com");

    cy.get("#email.invalid").should("exist");
  });
});