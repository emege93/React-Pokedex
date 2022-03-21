import React from "react";
import { SWRConfig } from "swr";
import { render, RenderResult } from "@testing-library/react";
import { pokemonListMock } from "../fixtures/pokemonMock";
import App from "../pages/App";

const setup = () => {
  return render(
    <SWRConfig
      value={{
        fallback: {
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25": {
            results: pokemonListMock,
          },
        },
      }}
    >
      <App />
    </SWRConfig>
  ) as RenderResult;
};

describe("PokeApp", () => {
  it("renders PokeApp", () => {
    const { getByText } = setup();

    const title = getByText(/Pokedex/i);
    const pokemon = getByText(/ivysaur/i);

    expect(title).toBeInTheDocument();
    expect(pokemon).toBeInTheDocument();
  });
});
