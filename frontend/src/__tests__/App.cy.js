/* eslint-disable no-undef */
import React from "react";
import App from "../App";
import "../index.css";

describe("App Component Tests", () => {
  beforeEach(() => {
    cy.mount(<App />);
  });

  it("should check if SideNavigation exists", () => {
    cy.get("#side-navigation").should("exist");
  });

  it("should check if TextViewer exists", () => {
    cy.get("#text-viewer").should("exist");
  });

  it("should check if data loads by default", () => {
    cy.get("#side-navigation").contains("Chapter 1").should("exist");
    cy.get("#text-viewer").contains("Chapter 1").should("exist");
  });

  it("should change data on click", () => {
    cy.get("#side-navigation").contains("Chapter 2").click();
    cy.get("#text-viewer").contains("Chapter 2").should("exist");
    cy.get("#text-viewer")
      .contains("Section value is missing.")
      .should("exist");
    cy.get("#text-viewer").contains("Chapter 1").should("not.exist");
  });
});
