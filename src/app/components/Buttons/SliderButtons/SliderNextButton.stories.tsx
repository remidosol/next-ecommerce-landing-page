import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SliderNextButton } from "./SliderPrevNextButtons";

const meta: Meta<typeof SliderNextButton> = {
  component: SliderNextButton,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    className: { control: "text" },
  },
};

export const Default: StoryObj<typeof SliderNextButton> = {
  args: {
    disabled: false,
  },
  render: (args) => <SliderNextButton {...args} />,
};

export const Disabled: StoryObj<typeof SliderNextButton> = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export default meta;
