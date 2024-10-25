import { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./page";

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
};

export const Default: StoryObj<typeof HeroSection> = {
  render: (_args) => <HeroSection />,
};

export default meta;
