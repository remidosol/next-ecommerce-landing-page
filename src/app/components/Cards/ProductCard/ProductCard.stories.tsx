import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  argTypes: {
    className: { control: "text" },
    data: {
      control: "object",
      description: "Data for the product card, including header, description, and title.",
    },
  },
  render: (args) => <ProductCard {...args} />,
};

export const Default: StoryObj<typeof ProductCard> = {
  args: {
    data: {
      header: {
        headerImageAlt: "Product Image",
        headerImageSrc:
          "https://s3-alpha-sig.figma.com/img/dca1/86a5/0d88eb3d3af7ffd32f03165632eb5422?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh1Hmr9vrmUEXaAqqgNsdxIngknZNdK9tJvlS5si3ive5wBmHq2MuDje0FwP7e-ZCKqAtDNNkJ8NHo~S87Riif9dXun0yV-IHG9RrC9-ExmdUmtm31Wp9pBBcr7cyB1N~fiiS8tQIka4Jc~te-sUiyVl8j94VFaRJ1wB2-AWngNGTQHrXf-mEbHmX7ZeTddS2ueAt9a6dY4oHynFRv~FjBVz0iE6~BdJReEOi4xR932n96~X3tHV08dsfTSePdtlC~xFeowcWupuaj6NH7JGRCKqpGUxVg1EChMXD-LRNVGHLU07zuzIu3WR1H-Ez21uHDviRCF1~rrCtV3KyiHx4A__",
      },
      title: "Product Title",
      description: "Product Description",
    },
  },
  render: (args) => <ProductCard {...args} />,
};

export default meta;
