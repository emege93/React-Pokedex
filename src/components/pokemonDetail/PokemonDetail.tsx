import { useEffect, useState } from "react";
import { setBackgroundColor } from "../../helper/pokemonHelper";
import { pokemonSerializer } from "../../helper/serializer";
import { PokemonDetails, PokemonInfo } from "../../interface/pokemon.interface";
import { PokemonArtWork } from "../pokemonArtWork/PokemonArtWork";
import { PokemonInfoComponent } from "../pokemonInfoComponent/PokemonInfoComponent";
import "./PokemonDetail.scss";

export const PokemonDetail = ({ pokemon }: { pokemon: PokemonDetails }) => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();

  useEffect(() => {
    if (pokemon) {
      setPokemonInfo(pokemonSerializer(pokemon));
    }
  }, [pokemon]);

  return (
    <div
      className={`content ${
        pokemon && setBackgroundColor(pokemon.types[0].type.name)
      }
    `}
    >
      <h1 className="title">Pokedex</h1>
      <div className="pokemon-img">
        {pokemon ? <PokemonArtWork pokemon={pokemon} /> : null}
      </div>
      {pokemonInfo && <PokemonInfoComponent pokemonInfo={pokemonInfo} />}
    </div>
  );
};
