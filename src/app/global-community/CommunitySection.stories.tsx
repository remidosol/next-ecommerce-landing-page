import { Meta, StoryObj } from "@storybook/react";
import CommunitySection from "./page";

const meta: Meta<typeof CommunitySection> = {
  component: CommunitySection,
};

export const Default: StoryObj<typeof CommunitySection> = {
  render: (_args) => <CommunitySection />,
};

export default meta;
