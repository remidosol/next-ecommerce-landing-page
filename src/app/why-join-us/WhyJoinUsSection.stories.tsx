import { Meta, StoryObj } from "@storybook/react";
import WhyJoinUsSection from "./page";

const meta: Meta<typeof WhyJoinUsSection> = {
  component: WhyJoinUsSection,
};

export const Default: StoryObj<typeof WhyJoinUsSection> = {
  render: (_args) => <WhyJoinUsSection />,
};

export default meta;
