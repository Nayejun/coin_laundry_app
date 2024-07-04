"use client";

import React, { FC } from "react";
import Plus from "@/assets/icons/editAddress/plus.svg";

type ActionButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const ActionButton: FC<ActionButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      className={`w-full max-w-[430px] py-[16px] px-[24px] bg-static-white ${className}`}
    >
      <button
        className={`w-full h-[52px] rounded-md flex justify-center items-center text-body-1-normal font-semibold text-primary-normal border border-primary-normal ${className}`}
        onClick={onClick}
      >
        <Plus className="w-4 h-4 mr-2" />
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
