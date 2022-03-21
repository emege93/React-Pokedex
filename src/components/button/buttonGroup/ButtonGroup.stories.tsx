import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Button/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
