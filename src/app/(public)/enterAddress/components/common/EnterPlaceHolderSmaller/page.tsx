"use client";
import React, { forwardRef } from "react";

interface EnterPlaceHolderSmallerProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

// Use forwardRef to forward the ref to the input element
const EnterPlaceHolderSmaller = forwardRef<HTMLInputElement, EnterPlaceHolderSmallerProps>(
  ({ id, placeholder, value, onChange, onFocus }, ref) => {
    return (
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        ref={ref} // Forward the ref to the input element
        className="border border-line-normal text-body-1-normal rounded-md px-3 py-2 w-full mr-[24px] outline-none"
      />
    );
  }
);

EnterPlaceHolderSmaller.displayName = "EnterPlaceHolderSmaller";

export default EnterPlaceHolderSmaller;
