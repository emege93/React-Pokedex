import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonButton } from "./PokemonButton";

export default {
  title: "Button/PokemonButton",
  component: PokemonButton,
} as ComponentMeta<typeof PokemonButton>;

const Template: ComponentStory<typeof PokemonButton> = (args) => (
  <PokemonButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pokemon: {
    name: "pikachu",
    url: "https://pokeapi.co/api/v2/pokemon/25/",
  },
};
