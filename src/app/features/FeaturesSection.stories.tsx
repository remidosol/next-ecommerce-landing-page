import { Meta, StoryObj } from "@storybook/react";
import FeaturesSection from "./page";

const meta: Meta<typeof FeaturesSection> = {
  component: FeaturesSection,
};

export const Default: StoryObj<typeof FeaturesSection> = {
  render: (_args) => <FeaturesSection />,
};

export default meta;
