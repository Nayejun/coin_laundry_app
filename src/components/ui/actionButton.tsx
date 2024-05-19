"use client";

import React, { FC } from "react";
import { ActionButtonProps } from "@/lib/types";

const ActionButton: FC<ActionButtonProps> = ({ label, onClick, disabled, color }) => {
  return (
    <button
      className={`w-[328px] h-[48px] rounded-[10px] py-[12px] px-[28px] flex justify-center items-center transition-colors duration-300 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "text-white"
      }`}
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ActionButton;
