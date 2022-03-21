import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { PokemonDetail } from "../pokemonDetail/PokemonDetail";
import { pokemonDetailsMock } from "../../fixtures/pokemonDetailsMock";

const setup = () => {
  return render(<PokemonDetail pokemon={pokemonDetailsMock} />) as RenderResult;
};

describe("PokeApp", () => {
  it("renders PokeApp", () => {
    const { getByText, getAllByText, debug } = setup();

    debug();

    const title = getByText(/Pokedex/i);
    expect(title).toBeInTheDocument();

    const pokemon = getAllByText(/bulbasaur/i);
    expect(pokemon).toBeTruthy();

    const stat = getByText(/ABILITIES/i);
    expect(stat).toBeInTheDocument();

    const statValue = getByText(/overgrow/i);
    expect(statValue).toBeInTheDocument();
  });
});
