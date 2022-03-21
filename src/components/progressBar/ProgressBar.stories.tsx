import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import "./ProgressBar.scss";

export default {
  title: "ProgressBar/example",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const OneThird = Template.bind({});
OneThird.args = {
  stat: { name: "Name", value: 30 },
};

export const Half = Template.bind({});
Half.args = {
  stat: { name: "Name", value: 50 },
};

export const Full = Template.bind({});
Full.args = {
  stat: { name: "Name", value: 100 },
};
