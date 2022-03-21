import React, { useEffect, useState } from "react";
import type { Pokemon } from "../interface/pokemon.interface";
import { usePokemonList } from "../hooks/usePokemonList";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { SideMenu } from "../components/sideMenu/SideMenu";
import { PokemonDetail } from "../components/pokemonDetail/PokemonDetail";
import { ButtonGroup } from "../components/button/buttonGroup/ButtonGroup";
import { PokemonList } from "../components/pokemonList/PokemonList";
import "../styles/App.scss";

const App: React.FC = () => {
  const offSetStep = 25;

  const [offSet, setOffSet] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [selectedPokemon, setSelectedPokemon] = useState<string>();

  const { pokemonList } = usePokemonList(offSet);
  const { pokemon } = usePokemonDetails(selectedPokemon);

  useEffect(() => {
    setPokemons(pokemonList?.results);
  }, [pokemonList?.results]);

  function handleOnBack() {
    if (offSet === 0) return;
    setOffSet(offSet - offSetStep);
  }

  function handleOnNext() {
    setOffSet(offSet + offSetStep);
  }

  return (
    <main className="root">
      <div className="main">
        <SideMenu
          content={
            pokemons && (
              <PokemonList
                pokemons={pokemons}
                setPokemon={setSelectedPokemon}
              />
            )
          }
          footer={<ButtonGroup onNext={handleOnNext} onBack={handleOnBack} />}
        />
        <PokemonDetail pokemon={pokemon} />
      </div>
    </main>
  );
};

export default App;
