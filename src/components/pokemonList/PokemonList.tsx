import { Dispatch } from "react";
import { Pokemon } from "../../interface/pokemon.interface";
import { PokemonButton } from "../button/pokemonButton/PokemonButton";
import "./PokemonList.scss";

export const PokemonList = ({
  pokemons,
  setPokemon,
}: {
  pokemons: Pokemon[];
  setPokemon: Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon: Pokemon, index) => {
        return (
          <PokemonButton
            data-testid={`pokemon-button-${pokemon.name}`}
            key={index}
            pokemon={pokemon}
            onClick={() => setPokemon(pokemon.url)}
          />
        );
      })}
    </div>
  );
};
