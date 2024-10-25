import { Meta, StoryObj } from "@storybook/react";
import TestimonalsSection from "./page";

const meta: Meta<typeof TestimonalsSection> = {
  component: TestimonalsSection,
};

export const Default: StoryObj<typeof TestimonalsSection> = {
  render: (_args) => <TestimonalsSection />,
};

export default meta;
