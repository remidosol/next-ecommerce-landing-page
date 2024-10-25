import { Meta, StoryObj } from "@storybook/react";
import ExpandCollectionSection from "./page";

const meta: Meta<typeof ExpandCollectionSection> = {
  component: ExpandCollectionSection,
};

export const Default: StoryObj<typeof ExpandCollectionSection> = {
  render: (_args) => <ExpandCollectionSection />,
};

export default meta;
