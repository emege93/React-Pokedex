import useSWR from "swr";
import { POKE_API_URL } from "../constants/urls";
import { fetcher } from "../helper/apiHelper";
import { Pokemon } from "../interface/pokemon.interface";

export function usePokemonList(offSet: number) {
  const { data, error } = useSWR(
    `${POKE_API_URL}pokemon/?offset=${offSet}&limit=25`,
    fetcher
  );

  return {
    pokemonList: data as {
      count: number;
      next: number | null;
      previous: number | null;
      results: Pokemon[];
    },
    isLoading: !error && !data,
    isError: error,
  };
}
