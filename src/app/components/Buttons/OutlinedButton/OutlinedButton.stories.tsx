import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import OutlinedButton from "./OutlinedButton";

const meta: Meta<typeof OutlinedButton> = {
  component: OutlinedButton,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    className: { control: "text" },
  },
};

export const Default: StoryObj<typeof OutlinedButton> = {
  args: {
    children: "Sign Up Now",
    className: "",
  },
  render: (args) => <OutlinedButton {...args} />,
};

export const WithCustomClass: StoryObj<typeof OutlinedButton> = {
  ...Default,
  // parameters: {
  //   pseudo: {
  //     hover: [".button:hover"],
  //   },
  // },
  args: {
    ...Default.args,
    children: "Custom Styled Button",
    className: "hover:bg-blue-500 hover:text-white",
  },
};

export const Disabled: StoryObj<typeof OutlinedButton> = {
  ...Default,
  args: {
    ...Default.args,
    children: "Disabled Button",
    className: "disabled:opacity-50",
    disabled: true,
  },
};

export default meta;
