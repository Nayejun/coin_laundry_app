"use client";
import React from 'react';

interface EnterPlaceholderSmallerProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EnterPlaceholderSmaller: React.FC<EnterPlaceholderSmallerProps> = ({
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-line-normal text-body-2-normal rounded-md px-3 py-2 w-full outline-none"
    />
  );
};

export default EnterPlaceholderSmaller;
