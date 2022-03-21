// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("PokeApp", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the app", () => {
    const user = cy;

    user.findByText("Pokedex").should("exist");
  });

  it("should can see list", () => {
    const user = cy;

    user.findByText("BACK").should("exist");
    user.findByText("NEXT").should("exist");
    user.findByText("bulbasaur").should("exist");
  });

  it("should be able to move on to the following pokemons ", () => {
    const user = cy;

    user.findByText("NEXT").click();

    user.findByText("raichu").should("exist");
  });

  it("should be able to go back to the first pokemons.", () => {
    const user = cy;

    user.findByText("BACK").click();

    user.findByText("bulbasaur").should("exist");
  });

  it("should can see the pokemon details", () => {
    const user = cy;

    user.findByText("bulbasaur").click();

    user.findByText("ID").should("exist");
    user.findByText("1").should("exist");
  });

  it("should can see other pokemon details", () => {
    const user = cy;

    user.findByText("charizard").click();

    user.findByText("solar-power").should("exist");
  });
});
