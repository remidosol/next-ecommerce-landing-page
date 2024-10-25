import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SliderPrevButton } from "./SliderPrevNextButtons";

const meta: Meta<typeof SliderPrevButton> = {
  component: SliderPrevButton,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    className: { control: "text" },
  },
};

export const Default: StoryObj<typeof SliderPrevButton> = {
  args: {
    disabled: false,
  },
  render: (args) => <SliderPrevButton {...args} />,
};

export const Disabled: StoryObj<typeof SliderPrevButton> = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export default meta;
