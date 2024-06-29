"use client";
import React, { forwardRef } from "react";

interface EnterPlaceholderProps {
  type?: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

// Use forwardRef to forward the ref to the input element
const EnterPlaceholder = forwardRef<HTMLInputElement, EnterPlaceholderProps>(
  ({ id, placeholder, value, onChange, onFocus, onBlur }, ref) => {
    return (
      <div className="flex items-center border rounded-md w-full max-w-[430px] h-[48px] px-[16px] py-[12px] text-body-1-reading">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref} // Forward the ref to the input element
          className="bg-transparent text-body-1-reading text-label-normal font-normal w-full outline-none"
        />
      </div>
    );
  }
);

EnterPlaceholder.displayName = "EnterPlaceholder";

export default EnterPlaceholder;
