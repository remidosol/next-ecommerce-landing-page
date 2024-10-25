"use client";

import styles from "./OutlinedButton.module.css";
import React, { ButtonHTMLAttributes } from "react";

type OutlinedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
} & ButtonHTMLAttributes<any>;

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ children, onClick, className = "", ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default OutlinedButton;
