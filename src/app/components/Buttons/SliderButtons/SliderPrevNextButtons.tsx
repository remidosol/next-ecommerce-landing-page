import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React, { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export const SliderNextButton: React.FC<PropType> = (props) => {
  return (
    <button
      className={`w-12 h-12 z-20 rounded-full ${props.disabled ? "hover:bg-yellow-100" : "hover:bg-[#FDE68A]"}`}
      {...props}
    >
      <ArrowRightCircleIcon color='#78350F' />
    </button>
  );
};

export const SliderPrevButton: React.FC<PropType> = (props) => {
  return (
    <button
      className={`w-12 h-12 z-20 rounded-full ${props.disabled ? "hover:bg-yellow-100" : "hover:bg-[#FDE68A]"}`}
      {...props}
    >
      <ArrowLeftCircleIcon color='#78350F' />
    </button>
  );
};
