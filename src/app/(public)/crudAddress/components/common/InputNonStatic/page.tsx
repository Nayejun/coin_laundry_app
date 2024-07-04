"use client";
import React from "react";

interface InputNonStaticProps {
  name: string;
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputNonStatic: React.FC<InputNonStaticProps> = ({
  name,
  value,
  onChange,
  onClick,
  onFocus,
  onBlur,
  className,
  type = "text",
}) => {
  return (
    <div className="flex items-center w-full max-w-[430px] h-[48px] px-[16px] py-[12px] rounded-md bg-[#F8F8FA]">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`bg-[#F8F8FA] text-body-1-reading font-medium text-label-normal outline-none w-full ${className}`}
      />
    </div>
  );
};

export default InputNonStatic;
