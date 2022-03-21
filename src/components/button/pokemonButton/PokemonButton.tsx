import React, { MouseEventHandler } from "react";
import { Pokemon } from "../../../interface/pokemon.interface";
import pokeballIcon from "../../../assets/pokeball.png";
import "./PokemonButton.scss";

interface PokemonButtonProps {
  pokemon: Pokemon;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const PokemonButton = ({
  pokemon,
  onClick,
  ...props
}: PokemonButtonProps) => {
  return (
    <>
      <div className="pokemon-item">
        <img src={pokeballIcon} alt="Logo" />
        <button {...props} className="pokemon-button" onClick={onClick}>
          {pokemon.name}
        </button>
      </div>
    </>
  );
};
