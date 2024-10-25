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
  render: (args) => <TestimonalCard {...args} />,
};

export const Default: StoryObj<typeof TestimonalCard> = {
  args: {
    data: {
      header: {
        headerVisual: (
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16343 0 0 7.16345 0 16C0 24.8366 7.16343 32 16 32ZM20.9915 7.45348C21.2344 6.59044 20.3969 6.08011 19.632 6.62504L8.9545 14.2317C8.12498 14.8226 8.25546 16 9.1505 16H11.9622V15.9782H17.442L12.977 17.5537L11.0086 24.5466C10.7656 25.4096 11.6031 25.9199 12.368 25.375L23.0455 17.7684C23.8751 17.1774 23.7445 16 22.8496 16H18.5857L20.9915 7.45348Z'
              fill='#475569'
            />
          </svg>
        ),
        headerText: "Zoomerr",
      },
      description:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      testimonalOwner: {
        avatar: {
          avatarSrc:
            "https://s3-alpha-sig.figma.com/img/4968/5ac7/b81e766e223bcb38bd406643740bb4b1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fASoRSGCi9Du38lIkIfTXvAKT~zCQksWHjMmGsaaQl593Qy4AwydPi2cQ8oa0aeV9m5FloZWiPig~BJhf4567z2HnGuds8h5DJjF0MxMIEswoBuO8l5z03mxziA9SPzXFQv4u~Hjh2z8eum0MsAeSY710MQ34kyEjwOKqkSHyZa7EoXiXnly1z6BWPJ~0Mz0QSgQsWN5iJUJ8RQTdy1W431xhGmMdWh-o4w6Akpy~e-ikP337ok5qZ~VacRfJPWY9jt3PWU7fx9VrOhd6OorHXeTv-Q~y7tCOGxtEpLiNr1FPp9N5aaqyfPSs~yQGUekisArCuqckeh2ndTYiMed6Q__",
          avatarAlt: "Hellen Jummy Avatar",
        },
        fullName: "Hellen Jummy",
        position: "Team Lead",
      },
    },
  },
  render: (args) => <TestimonalCard {...args} />,
};

export default meta;
