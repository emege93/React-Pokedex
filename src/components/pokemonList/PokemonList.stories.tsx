import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonList } from "./PokemonList";
import { pokemonListMock } from "../../fixtures/pokemonMock";

export default {
  title: "SideMenu/PokemonList",
  component: PokemonList,
} as ComponentMeta<typeof PokemonList>;

const Template: ComponentStory<typeof PokemonList> = (args) => (
  <PokemonList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pokemons: pokemonListMock,
};
