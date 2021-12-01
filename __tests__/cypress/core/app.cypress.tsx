describe("App", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("works", () => {
    cy.get("body").contains("Hello React!");
  });
});
