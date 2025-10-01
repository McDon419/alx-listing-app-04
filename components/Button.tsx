// components/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
