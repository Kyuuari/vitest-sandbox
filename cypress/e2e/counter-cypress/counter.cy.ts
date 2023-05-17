/// <reference types="cypress" />

describe("Counter Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("increments count flow", () => {
    cy.contains("Count: 0");
    cy.findByTestId("increment-button").click();
    cy.contains("Count: 1");
  });

  it("Decrement count flow", () => {
    cy.contains("Count: 0");
    cy.findByTestId("decrement-button").click();
    cy.contains("Count: -1");
  });

  it("Reset count flow", () => {
    cy.contains("Count: 0");
    cy.findByTestId("reset-button").click();
    cy.contains("Count: 0");
  });

  it("Full count flow", () => {
    cy.contains("Count: 0");
    cy.findByTestId("increment-button").click().click();
    cy.contains("Count: 2");
    cy.findByTestId("decrement-button").click();
    cy.contains("Count: 1");
    cy.findByTestId("reset-button").click();
    cy.contains("Count: 0");
  });
});
