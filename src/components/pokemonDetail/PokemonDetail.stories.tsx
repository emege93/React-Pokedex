import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonDetail } from "./PokemonDetail";
import { pokemonDetailsMock } from "../../fixtures/pokemonDetailsMock";

export default {
  title: "Details/FullDetails",
  component: PokemonDetail,
} as ComponentMeta<typeof PokemonDetail>;

const Template: ComponentStory<typeof PokemonDetail> = (args) => (
  <PokemonDetail {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pokemon: pokemonDetailsMock,
};
