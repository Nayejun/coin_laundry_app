"use client";
import React from 'react';

interface EnterPlaceholderSmallerProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.forwardRef;
}

const EnterPlaceholderSmaller: React.FC<EnterPlaceholderSmallerProps> = ({
  id,
  placeholder,
  value,
  onChange,
  onFocus,
  ref
}) => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-line-normal text-body-1-normal rounded-md px-3 py-2 w-full mr-[24px] outline-none"
    />
  );
};

export default EnterPlaceholderSmaller;
