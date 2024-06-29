// 

"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/assets/icons/others/chevron-down-small.svg"; // Import your custom arrow icon
import CheckMarkIcon from "@/assets/icons/others/check-mark-icon.svg"; // Import your check mark icon
import { CustomSelectProps, Option } from "@/lib/types"; // Adjust the path as needed

const CustomSelect: React.FC<CustomSelectProps> = ({
  id = "default-options-id",
  value,
  onChange,
  options = [], // Use default parameter
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue: string) => {
    onChange({ target: { value: optionValue } } as React.ChangeEvent<{ value: string }>);
    setIsOpen(false);
  };

  const selectedOption = options.find((option: Option) => option.value === value);

  return (
    <div
      className="relative cursor-pointer w-full max-w-[430px] h-[46px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center border border-gray-300 rounded-md px-[6px] py-[12px]">
        <span className={`${"text-body-1-normal font-semibold text-label-neutral"} ml-[10px]`}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <ArrowDownIcon
          className={`w-4 h-4 mr-[12px] transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-static-white border-gray-300 z-100 rounded-md mt-[12px] shadow-elevation-shadow-emphasize">
          {options.map((option: Option) => (
            <div
              key={option.value}
              className={`pl-[16px] py-[12px] text-body-2-reading ${
                option.value === value
                  ? "text-primary-strong font-semibold flex items-center bg-[#EFF7F7]"
                  : "text-label-neutral font-semibold"
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
              {option.value === value && (
                <CheckMarkIcon className="absolute right-[16px] w-[16px] h-[12px]" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
