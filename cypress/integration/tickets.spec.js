describe("Tickets", () => {
  beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

  it("has 'TICKETBOX' header's heading", () => {
    cy.get("header h1").should("contain", "TICKETBOX");
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

  it("putting it all together, and reseting it all", () => {
    const firstName = "Walmyr";
    const lastName = "Filho";
    cy.get("#first-name").as("firstName").type(firstName);
    cy.get("#last-name").as("lastName").type(lastName);
    cy.get("#email").as("email").type("email@example.com");

    cy.get("#ticket-quantity").select("2");
    cy.get("#vip").check();
    cy.get("#friend").check();

    cy.get("#requests").as("specialRequests").type("IPA beer");

    cy.get(".agreement p")
      .should(
        "contain",
        `I, ${firstName} ${lastName}, wish to buy 2 VIP tickets.`
      );

    cy.get("#agree").check();

    cy.get("button[type='submit']").should("not.be.disabled");

    cy.get("button[type='reset']").click();

    cy.get("button[type='submit']").should("be.disabled");
  });
});