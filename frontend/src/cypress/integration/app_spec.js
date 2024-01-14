describe("Navigation Test", () => {
  it("should navigate to a heading and show content", () => {
    cy.visit("/"); // Adjust the path based on your app's routes

    // Assuming you have a heading with the class "heading" that you want to click
    cy.get(".heading").click();

    // Assuming your content viewer has a class "content"
    cy.get(".content").should("exist");
  });
});
