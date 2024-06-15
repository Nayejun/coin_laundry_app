/*
Input field with placeholder as a prop
*/

import React, { forwardRef } from 'react';

interface EnterPlaceholderProps {
  id: string;
  placeholder: string;
  disabled: boolean;
}

const EnterPlaceholder = forwardRef<HTMLInputElement, EnterPlaceholderProps>((props, ref) => (
  <div className={`flex items-center border rounded-[10px] w-[342px] h-[48px] px-[16px] py-[12px] ${props.disabled ? 'bg-gray-200 border-gray-400 cursor-not-allowed' : 'bg-[#FFF] border-line-normal'}`}>
    
    <input
      id={props.id}
      placeholder={props.placeholder}
      disabled={props.disabled}
      ref={ref} // Forward the ref to the input element
      className="bg-transparent text-label-assistive font-normal w-full outline-none" // Add your desired class
    />
  </div>
));

EnterPlaceholder.displayName = 'EnterPlaceholder';

export default EnterPlaceholder;