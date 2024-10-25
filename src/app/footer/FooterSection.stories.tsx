import { Meta, StoryObj } from "@storybook/react";
import FooterSection from "./page";

const meta: Meta<typeof FooterSection> = {
  component: FooterSection,
};

export const Default: StoryObj<typeof FooterSection> = {
  render: (_args) => <FooterSection />,
};

export default meta;
