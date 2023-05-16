/// <reference types="cypress" />

describe("Counter Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("increments count when increment button is clicked", () => {
    cy.contains("Count: 0"); // Verify that the initial count is 0
    cy.contains("Increment").click(); // Click the increment button
    cy.contains("Count: 1"); // Verify that the count has been incremented to 1
  });
});
