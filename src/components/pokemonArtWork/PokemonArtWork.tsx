import { PokemonDetails } from "../../interface/pokemon.interface";

export const PokemonArtWork = ({ pokemon }: { pokemon: PokemonDetails }) => {
  pokemon as PokemonDetails;
  return (
    <img
      width={400}
      src={pokemon.sprites.other["official-artwork"]?.front_default}
      alt={pokemon.name}
    />
  );
};
