import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TestimonalCard from "./TestimonalCard";

const meta: Meta<typeof TestimonalCard> = {
  component: TestimonalCard,
  argTypes: {
    className: { control: "text" },
    data: {
      control: "object",
      description: "Data for the testimonial card, including header, description, and owner information.",
    },
  },
};

export const Default: StoryObj<typeof TestimonalCard> = {
  args: {
    data: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus natus facilis voluptas minima, pariatur, in illo cum assumenda vero consectetur dignissimos fugiat dolorem neque delectus enim nobis. Dignissimos, illum adipisci.",
      header: {
        headerIconAlt: "",
        headerIconSrc: "",
        headerText: "Company Name",
      },
      testimonalOwner: {
        avatar: {
          avatarSrc: "",
          avatarAlt: "",
        },
        fullName: "John Doe",
        position: "Accountant Manager",
      },
    },
  },
  render: (args) => <TestimonalCard {...args} />,
};

// export const WithCustomClass: StoryObj<typeof TestimonalCard> = {
//   ...Default,
//   args: {
//     ...Default.args,
//     data: {
//       description:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus natus facilis voluptas minima, pariatur, in illo cum assumenda vero consectetur dignissimos fugiat dolorem neque delectus enim nobis. Dignissimos, illum adipisci.",
//       header: {
//         headerIconAlt: "",
//         headerIconSrc: "",
//         headerText: "Company Name",
//       },
//       testimonalOwner: {
//         avatar: {
//           avatarSrc: "",
//           avatarAlt: "",
//         },
//         fullName: "John Doe",
//         position: "Accountant Manager",
//       },
//     },
//   },
// };

export default meta;
