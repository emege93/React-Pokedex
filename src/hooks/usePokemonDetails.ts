import useSWR from "swr";
import { fetcher } from "../helper/apiHelper";
import { PokemonDetails } from "../interface/pokemon.interface";

export function usePokemonDetails(pokemonUrl: string | undefined) {
  const { data, error } = useSWR(pokemonUrl || null, fetcher);

  return {
    pokemon: data as PokemonDetails,
    isLoading: !error && !data,
    isError: error,
  };
}
