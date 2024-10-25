import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ButtonWithIcon from "./ButtonWithIcon";
import { PlayCircleIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";

const meta: Meta<typeof ButtonWithIcon> = {
  component: ButtonWithIcon,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    className: { control: "text" },
    Icon: {
      control: "radio",
      mapping: {
        ShoppingCartIcon: ShoppingCartIcon,
        PlayCircleIcon: PlayCircleIcon,
      },
      options: ["ShoppingCartIcon", "PlayCircleIcon"],
    },
  },
  render: (args) => <ButtonWithIcon {...args} />,
};

export const Default: StoryObj<typeof ButtonWithIcon> = {
  args: {
    children: "Watch Now",
    Icon: ShoppingCartIcon,
  },
};

export const WithCustomClass: StoryObj<typeof ButtonWithIcon> = {
  ...Default,
  args: {
    ...Default.args,
    children: "Custom Styled Button",
    className: "hover:bg-blue-500 hover:text-white",
    Icon: ShoppingCartIcon,
  },
};

export const Disabled: StoryObj<typeof ButtonWithIcon> = {
  ...Default,
  args: {
    ...Default.args,
    children: "Disabled Button",
    className: "disabled:opacity-50",
    disabled: true,
    Icon: ShoppingCartIcon,
  },
};

export default meta;
