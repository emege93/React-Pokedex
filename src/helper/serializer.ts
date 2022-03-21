import { PokemonDetails, PokemonInfo } from "../interface/pokemon.interface";

export const pokemonSerializer = (pokemon: PokemonDetails): PokemonInfo => {
  const abilities = pokemon.abilities.map((ability) => {
    return ability.ability.name;
  });
  const types = pokemon.types.map((type) => {
    return type.type.name;
  });
  const forms = pokemon.forms.map((form) => {
    return form.name;
  });
  const stats = pokemon.stats.map((stat) => {
    return { name: stat.stat.name, value: stat.base_stat };
  });

  return {
    id: pokemon.id,
    name: pokemon.name,
    abilities,
    height: pokemon.height,
    weight: pokemon.weight,
    types,
    forms,
    stats,
  };
};
