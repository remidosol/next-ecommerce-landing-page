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
};

export const Default: StoryObj<typeof ProductCard> = {
  args: {
    data: {
      header: {
        headerImageAlt: "Product Image",
        headerImageSrc: "https://via.placeholder.com/150",
      },
      title: "Product Title",
      description: "Product Description",
    },
  },
  render: (args) => <ProductCard {...args} />,
};

export default meta;
