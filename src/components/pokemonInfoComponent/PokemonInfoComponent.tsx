import { PokemonInfo } from "../../interface/pokemon.interface";
import { ProgressBar } from "../progressBar/ProgressBar";
import "./PokemonInfoComponent.scss";

export const PokemonInfoComponent = ({
  pokemonInfo,
}: {
  pokemonInfo: PokemonInfo;
}) => {
  return (
    <>
      <h1 className="pokemon-name">{pokemonInfo.name}</h1>
      <div className="pokemon-info-container">
        <div>
          <div>
            <p>ID</p>
            <p>{pokemonInfo.id}</p>
          </div>
          <div>
            <p>HEIGHT</p>
            <p>{pokemonInfo.height}</p>
          </div>
          <div>
            <p>WEIGHT</p>
            <p>{pokemonInfo.weight}</p>
          </div>
          <div>
            <p>ABILITIES</p>
            {PokemonStat(pokemonInfo.abilities)}
          </div>
          <div>
            <p>TYPE</p>
            {PokemonStat(pokemonInfo.types)}
          </div>
          <div>
            <p>FORMS</p>
            {PokemonStat(pokemonInfo.forms)}
          </div>
        </div>
        <div>{PokemonStatBar(pokemonInfo.stats)}</div>
      </div>
    </>
  );
};

export const PokemonStat = (fields: String[]) => {
  return fields.map((field, index) => {
    return <p key={index}>{field}</p>;
  });
};

export const PokemonStatBar = (stats: { name: string; value: number }[]) => {
  return stats.map((stat, index) => {
    return <ProgressBar key={index} stat={stat} />;
  });
};
