import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideMenu } from "./SideMenu";
import "./SideMenu.scss";

export default {
  title: "SideMenu/SideMenu",
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  content: <div>Content</div>,
  footer: <div>Footer</div>,
};
