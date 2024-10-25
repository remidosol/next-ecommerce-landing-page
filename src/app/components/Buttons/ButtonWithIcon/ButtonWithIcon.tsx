"use client";

import React, { ButtonHTMLAttributes } from "react";
import styles from "./ButtonWithIcon.module.css";

type ButtonWithIconProps = {
  children: React.ReactNode;
  Icon: React.FC;
  onClick?: () => void;
  className?: string;
} & ButtonHTMLAttributes<any>;

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  children,
  onClick = () => {},
  className = "",
  Icon,
  ...props
}) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} {...props}>
      <Icon />
      {children}
    </button>
  );
};

export default ButtonWithIcon;
