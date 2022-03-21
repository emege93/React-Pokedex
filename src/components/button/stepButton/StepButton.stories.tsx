import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StepButton } from "./StepButton";

export default {
  title: "Button/StepButton",
  component: StepButton,
} as ComponentMeta<typeof StepButton>;

const Template: ComponentStory<typeof StepButton> = (args) => (
  <StepButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Next",
  type: "primary-button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Next",
  type: "secondary-button",
};
