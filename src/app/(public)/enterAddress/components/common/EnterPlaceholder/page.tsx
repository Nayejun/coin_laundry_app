/*
Input field with placeholder as a prop
*/

import React, { forwardRef } from 'react';

interface EnterPlaceholderProps {
  id: string;
  placeholder: string;
}

const EnterPlaceholder = forwardRef<HTMLInputElement, EnterPlaceholderProps>((props, ref) => (
  
  <div className={`flex items-center border rounded-md w-full max-w-[430px] h-[48px] px-[16px] py-[12px] text-body-1-reading`}>
    
    <input
      id={props.id}
      placeholder={props.placeholder}
      ref={ref} // Forward the ref to the input element
      className="bg-transparent text-body-1-reading text-label-normal font-normal w-full outline-none" // Add your desired class
    />
  </div>
));

EnterPlaceholder.displayName = 'EnterPlaceholder';

export default EnterPlaceholder;