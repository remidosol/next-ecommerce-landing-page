import React from "react";

export type TestimonalCardData = {
  header: {
    headerIconSrc?: string;
    headerIconAlt?: string;
    headerVisual?: React.ReactNode;
    headerText: string;
  };
  description: string;
  testimonalOwner: {
    avatar: {
      avatarSrc: string;
      avatarAlt: string;
    };
    fullName: string;
    position: string;
  };
};

export type TestimonalCardProps = {
  className?: string;
  data: TestimonalCardData;
};
